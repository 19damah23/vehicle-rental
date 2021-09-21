import cookies from 'next-cookies'

export function requireAuthentication (gssp) {
  return async (context) => {
    const { token, role } = cookies(context)

    if (!token && !role && role !== 'member') {
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

export function requireAuthenticationAdmin (gssp) {
  return async (context) => {
    const { token, role } = cookies(context)

    if (!token && !role && role !== 'admin') {
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

export function requireAuthenticationAuth (gssp) {
  return async (context) => {
    const { token } = cookies(context)

    if (token) {
      return {
        redirect: {
          destination: '/',
          statusCode: 302
        }
      }
    }

    return await gssp(context)
  }
}
