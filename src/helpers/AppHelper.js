import { history } from 'helpers/router';

//history.push('/sample');
class LocalStorageHelper {
  loginUser = (loggedIn, loginRole, accessToken) => {
    // console.log('AppHelper.loginUser() called');
    window.localStorage.setItem("loggedIn", loggedIn);
    window.localStorage.setItem("loginRole", loginRole);
    window.localStorage.setItem("accessToken", accessToken);
    // console.log(window.localStorage.getItem("loggedIn"));
    // console.log(window.localStorage.getItem("loginRole"));
    // console.log(window.localStorage.getItem("accessToken"));
    history.push('/'+loginRole)
  }

  logoutUser = (logout) => {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.removeItem("loginRole");
    window.localStorage.removeItem("accessToken");
    window.location.href = "/";
    const logoutState={
        loggedIn:false ,
        loginRole:'',
        accessToken:'',
        counter:0
    }
    logout(logoutState)
    history.push('/')
  }

  isUserLoggedIn = () => {
    return window.localStorage.getItem("loggedIn")
  }

  getUserRole = () => {
    return window.localStorage.getItem("loginRole");
  }

  getUserAccessToken = () => {
    return window.localStorage.getItem("accessToken");
  }

}

export default LocalStorageHelper;
