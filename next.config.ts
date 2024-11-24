import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Autoriser les images depuis ce domaine
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
};

export default nextConfig;
