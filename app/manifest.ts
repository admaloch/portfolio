import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Davis Maloch | Full-Stack Engineer",
    short_name: "Davis Maloch",
    description:
      "Davis Maloch - Full-Stack Engineer building scalable software solutions with Python, React, and modern cloud technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "developer",
      "web development",
      "full stack",
      "ai integration",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
