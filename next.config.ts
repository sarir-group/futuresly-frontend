import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/:path*{/}?',
        has: [
          {
            type: 'host',
            value: '(?<siteHost>.*)',
          },
        ],
        destination: '/site/:siteHost/:path*',
      },
    ];
  },
};

export default nextConfig;
