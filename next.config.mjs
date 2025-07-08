/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["flagcdn.com", "q-xx.bstatic.com", "pix8.agoda.net"], // Add 'flagcdn.com' here
  },
};

export default nextConfig;
