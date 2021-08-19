module.exports = {
  images: {
    domains: ['localhost'],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
}