/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Mematikan SWC Minifier agar tidak Segmentation fault di Termux
  /* konfigurasi kamu yang lain jika ada */
};

module.exports = nextConfig;
