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
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
