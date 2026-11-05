import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { env } from "@/lib/env";

const fallbackHits = new Map<string, number[]>();

const upstashLimiter =
  env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: new Redis({
          url: env.UPSTASH_REDIS_REST_URL,
          token: env.UPSTASH_REDIS_REST_TOKEN,
        }),
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        analytics: true,
        prefix: "portfolio-contact",
      })
    : null;

export async function checkRateLimit(identifier: string) {
  if (upstashLimiter) {
    const result = await upstashLimiter.limit(identifier);
    return {
      success: result.success,
      remaining: result.remaining,
      reset: result.reset,
    };
  }

  const now = Date.now();
  const windowStart = now - 10 * 60 * 1000;
  const recent = (fallbackHits.get(identifier) ?? []).filter(
    (timestamp) => timestamp > windowStart,
  );

  if (recent.length >= 5) {
    fallbackHits.set(identifier, recent);
    return { success: false, remaining: 0, reset: recent[0] + 10 * 60 * 1000 };
  }

  recent.push(now);
  fallbackHits.set(identifier, recent);
  return { success: true, remaining: 5 - recent.length, reset: now + 10 * 60 * 1000 };
}
