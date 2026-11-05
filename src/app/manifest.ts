import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahmed — Full Stack & Mobile Developer",
    short_name: "Ahmed",
    description: "Fast, beautiful web and mobile products built with care.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080F",
    theme_color: "#07080F",
    icons: [{ src: "/icon", sizes: "any", type: "image/png" }],
  };
}
