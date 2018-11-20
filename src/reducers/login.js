import { REQUEST_LOGIN, REQUEST_LOGOUT, RESPONSE_LOGIN, RESPONSE_LOGOUT } from "actions";
const REQUEST_LOGIN_SUCCESS = "REQUEST_LOGIN_SUCCESS"
const REQUEST_LOGIN_FAIL = "REQUEST_LOGIN_FAIL"

const REQUEST_LOGOUT_SUCCESS = "REQUEST_LOGOUT_SUCCESS"
const REQUEST_LOGOUT_FAIL = "REQUEST_LOGOUT_FAIL"

const login = (state = {loading: true, loggedIn: false, userRole: ''}, action) => {
  switch(action.type) {
    case REQUEST_LOGIN:
      return {...state, loading: true, loggedIn: false}

    case REQUEST_LOGIN_SUCCESS:
      return {...state, loading: false, loggedIn: true}
    case REQUEST_LOGIN_FAIL:
      return {...state, loading: false, loggedIn: false}

    case REQUEST_LOGOUT:
      return {...state, loading: true, loggedIn: true}
 
    case REQUEST_LOGOUT_SUCCESS:
      return {...state, loading: false, loggedIn: false}
    case REQUEST_LOGOUT_FAIL:
      return {...state, loading: false, loggedIn: true}
    
    default:
      return {loading: true, loggedIn: false, userRole: ''}
  }
}

export default login;
