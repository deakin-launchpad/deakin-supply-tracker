import { client } from "index.js"
export const REQUEST_LOGIN = "REQUEST_LOGIN"
export const REQUEST_LOGOUT = "REQUEST_LOGOUT"
export const RESPONSE_LOGIN = "SUCCESS_LOGIN"
export const RESPONSE_LOGOUT = "SUCCESS_LOGOUT"

export function requestLogin () {
  return {
    type: REQUEST_LOGIN,
    payload: {
      request: {
        url: 'user/login',
        method: 'POST',
        data: {
          emailId: 'consumer@123.com',
          password: 'password'
        }
      }
    }
  }
}

export const requestLogout = () => ({
  type: REQUEST_LOGOUT
})

export const responseLogin = (response) => ({
  type: RESPONSE_LOGIN,
  status: response.status
})

export const responseLogout = (response) => ({
  type: RESPONSE_LOGOUT,
  status: response.status
})

// this won't work without redux-thunk middleware -- not added yet
export function performLogin(data) {
  return (dispatch) => {
    client.post("user/login", {
      emailId: data.emailId,
      password: data.password
    })
    .then((response) => dispatch(responseLogin(response)));
  }
}
