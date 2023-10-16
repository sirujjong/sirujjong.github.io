/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://sirujjong.github.io/" : "",
  reactStrictMode: true,
};

module.exports = nextConfig;