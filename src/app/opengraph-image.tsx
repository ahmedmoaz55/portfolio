import { ImageResponse } from "next/og";

export const alt = "Ahmed — Full Stack & Mobile Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#07080F",
        color: "#EDEFFA",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
        Ahmed<span style={{ color: "#2DD4BF" }}>.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800, letterSpacing: -3 }}>
          I build fast, beautiful
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: -3,
            color: "#2DD4BF",
          }}
        >
          web & mobile products.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#9AA0BF" }}>
        Full Stack Developer · Mobile App Developer
      </div>
    </div>,
    { ...size },
  );
}
