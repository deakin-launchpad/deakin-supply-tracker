import { REQUEST_LOGIN, REQUEST_LOGOUT, REQUEST_ACCESS_TOKEN_LOGIN, SET_USER_ROLE } from "actions";
const REQUEST_LOGIN_SUCCESS = "REQUEST_LOGIN_SUCCESS"
const REQUEST_LOGIN_FAIL = "REQUEST_LOGIN_FAIL"

const REQUEST_LOGOUT_SUCCESS = "REQUEST_LOGOUT_SUCCESS"
const REQUEST_LOGOUT_FAIL = "REQUEST_LOGOUT_FAIL"

const REQUEST_ACCESS_TOKEN_LOGIN_SUCCESS = "REQUEST_ACCESS_TOKEN_LOGIN_SUCCESS"
const REQUEST_ACCESS_TOKEN_LOGIN_FAIL = "REQUEST_ACCESS_TOKEN_LOGIN_FAIL"

const login = (state = {loading: false, loggedIn: false, userRole: ''}, action) => {
  switch(action.type) {
    case REQUEST_LOGIN:
    case REQUEST_ACCESS_TOKEN_LOGIN:
      return {...state, loading: true, loggedIn: false}

    case REQUEST_LOGIN_SUCCESS:
    case REQUEST_ACCESS_TOKEN_LOGIN_SUCCESS:
      return {...state, loading: false, loggedIn: true}

    case REQUEST_LOGIN_FAIL:
    case REQUEST_ACCESS_TOKEN_LOGIN_FAIL:
      return {...state, loading: false, loggedIn: false}


    case SET_USER_ROLE:
      return {...state, userRole: action.userRole}


    case REQUEST_LOGOUT:
      return {...state, loading: false, loggedIn: false, userRole: ''}

    case REQUEST_LOGOUT_SUCCESS:
      return {...state, loading: false, loggedIn: false}

    case REQUEST_LOGOUT_FAIL:
      return {...state, loading: false, loggedIn: true}


    default:
      return {loading: false, loggedIn: false, userRole: ''}
  }
}

export default login;
