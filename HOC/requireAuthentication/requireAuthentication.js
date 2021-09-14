import cookies from 'next-cookies'

export function requireAuthentication (gssp) {
  return async (context) => {
    const token = cookies(context).token

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          statusCode: 302
        }
      }
    }

    return await gssp(context)
  }
}
