class LocalStorageHelper {
  loginUser = (loggedIn, loginRole, accessToken) => {
    console.log('localshit called');
    window.localStorage.setItem("loggedIn", loggedIn);
    window.localStorage.setItem("loginRole", loginRole);
    window.localStorage.setItem("accessToken", accessToken);

    console.log(window.localStorage.getItem("loggedIn"));
    console.log(window.localStorage.getItem("loginRole"));
    console.log(window.localStorage.getItem("accessToken"));

    window.location.href = "/" + loginRole;
  }

  logoutUser = () => {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.removeItem("loginRole");
    window.localStorage.removeItem("accessToken");
    window.location.href = "/";
  }

  isUserLoggedIn = () => {
    return window.localStorage.getItem("loggedIn");
  }

  getUserRole = () => {
    return window.localStorage.getItem("loginRole");
  }

  getUserAccessToken = () => {
    return window.localStorage.getItem("accessToken");
  }

}

export default LocalStorageHelper;
