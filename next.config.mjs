/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['.env*', '.env.local', '.env*.local'],
    },
  },
};

export default nextConfig;
