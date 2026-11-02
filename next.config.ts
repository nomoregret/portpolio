import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    additionalData: `
      @use "@ui/styles/abstracts/mixins" as mix;
      @use "@ui/styles/abstracts/variables" as vars;
    `,
  },
};

export default nextConfig;
