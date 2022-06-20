const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/auth/:path*',
  //       destination: 'http://localhost:3030/api/auth/:path*', // Proxy to Backend
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
