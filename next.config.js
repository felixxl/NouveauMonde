const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg)$/i,
      use: ['url-loader'],
    });
    config.module.rules.push({
      test: /\.(svg)$/i,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  serverRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000/api',
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  }
};

module.exports = nextConfig;
