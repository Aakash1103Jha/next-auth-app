/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  distDir: "./build",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
