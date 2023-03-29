module.exports = {
  images: {
    domains: ['localhost:8000']
  },
  reactStrictMode: true,
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/home'
      },
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      }
    ]
  }
}
