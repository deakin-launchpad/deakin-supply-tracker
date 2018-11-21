export const REQUEST_LOGIN = "REQUEST_LOGIN"
export const REQUEST_LOGOUT = "REQUEST_LOGOUT"
export const REQUEST_ACCESS_TOKEN_LOGIN = "REQUEST_ACCESS_TOKEN_LOGIN"
export const SET_USER_ROLE = "SET_USER_ROLE"
export const RESPONSE_LOGIN = "SUCCESS_LOGIN"
export const RESPONSE_LOGOUT = "SUCCESS_LOGOUT"

export const requestLogin = (data) => ({
  type: REQUEST_LOGIN,
  payload: {
    request: {
      url: 'user/login',
      method: 'POST',
      data: {
        emailId: data.emailId,
        password: data.password
      }
    }
  }
})

export const requestAccessTokenLogin = (token) => ({
  type: REQUEST_ACCESS_TOKEN_LOGIN,
  payload: {
    request: {
      url: 'user/accessTokenLogin',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
})

export const requestLogout = () => ({
  type: REQUEST_LOGOUT
})

export const setUserRole = (userRole) => ({
  type: SET_USER_ROLE,
  userRole: userRole
})

export const responseLogin = (response) => ({
  type: RESPONSE_LOGIN,
  status: response.status
})

export const responseLogout = (response) => ({
  type: RESPONSE_LOGOUT,
  status: response.status
})
