import withBundleAnalyzer from "@next/bundle-analyzer";
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // tu configuración de Next.js aquí
};

export default bundleAnalyzer(nextConfig);
