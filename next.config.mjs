
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/My_Portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
