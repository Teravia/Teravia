/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Abaikan error TypeScript saat npm run build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
