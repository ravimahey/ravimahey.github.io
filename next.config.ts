import type { NextConfig } from "next";

// Automatically configure basePath for GitHub Pages:
// - If repo is "username.github.io" -> basePath is undefined (served at root https://username.github.io/)
// - If repo is "project-name" (e.g. "ravimahey") -> basePath is "/project-name" (served at https://username.github.io/project-name/)
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";
const isUserSite = !repo || repo.toLowerCase().endsWith(".github.io");
const basePath = !isUserSite && process.env.NODE_ENV === "production" ? `/${repo}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
