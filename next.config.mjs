/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // experimental: { optimizeCss: true },  
  images: {
    dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'randomuser.me',
            port: '',
          },
        ],
      },
};

export default nextConfig;
