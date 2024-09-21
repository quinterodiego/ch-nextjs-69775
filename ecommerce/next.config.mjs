/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.keychron.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'acdn.mitiendanube.com',
        port: '',
        pathname: '/**'
      }
     ]
  },
};

export default nextConfig;
