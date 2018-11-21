import { history } from 'helpers/router';

class AppHelper {
  loginUser = (loggedIn, loginRole, accessToken) => {
    window.localStorage.setItem("loggedIn", loggedIn);
    window.localStorage.setItem("loginRole", loginRole);
    window.localStorage.setItem("accessToken", accessToken);
    history.push('/' + loginRole)
  }

  logoutUser = () => {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.removeItem("loginRole");
    window.localStorage.removeItem("accessToken");
    history.push('/')
  }

  isUserLocalStorageLoggedIn = () => {
    let token = "";
    if (this.getUserLoggedIn() && ((token = this.getUserAccessToken()) !== ""))
      return token;
    else
      return false;
  }

  getUserLoggedIn = () => {
    let value = window.localStorage.getItem("loggedIn");
    return ( value !== 'false' && value !== 'null' );
  }

  getUserRole = () => {
    let value = window.localStorage.getItem("loginRole");
    return ( value !== 'false' && value !== 'null' ) ? value : "" ;
  }

  getUserAccessToken = () => {
    let value = window.localStorage.getItem("accessToken");
    return ( value !== 'false' && value !== 'null' ) ? value : "" ;
  }

}

const instance = new AppHelper();
export default instance;
