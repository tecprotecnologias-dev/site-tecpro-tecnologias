import type { NextConfig } from "next";

// Exportação estática: a pasta "out" vai direto para o Cloudflare Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
