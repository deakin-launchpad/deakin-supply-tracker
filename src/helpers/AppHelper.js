import { history } from 'helpers/router';
import API from "helpers/api.js";
// const API = new importedApi();

class LocalStorageHelper {
  constructor () {
    this.isUserAPILoggedIn = this.isUserAPILoggedIn.bind(this);
  }
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
    console.log("AppHelper.isUserLoggedIn() 0 [!this.getUserLoggedIn()]");
    let returnFlag = false;
    // const onReject = () => {returnFlag = false};

    let myPromise = new Promise((resolve, reject) => {
      if (!this.getUserLoggedIn()) {
        reject();
      }
      resolve();
    });

    myPromise
    .then(() => {
      console.log("AppHelper.isUserLoggedIn() 1 [this.getUserAccessToken()]");
      if(this.getUserAccessToken() === "") {
        throw new Error("this.getUserAccessToken()");
      }
    })
    .then(() => {
      console.log("AppHelper.isUserLoggedIn() 2 [API.accessTokenLoginUser()]");
      let value = API.accessTokenLoginUser();
      if(!value) {
        throw new Error("API.accessTokenLoginUser()");
      }
    })
    .then(() => {
      console.log("AppHelper.isUserLoggedIn() 3 [this.getUserRole()]");
      if(this.getUserRole() === "") {
        throw new Error("this.getUserRole()");
      }
      returnFlag = true;

    })
    .catch((err) => {
      console.log("Caught an error: " + err);
    })
    .then(() => {
      console.log("Ultimate value of returnFlag: " + returnFlag);
      // return true;
      return returnFlag;
    });
    
    // if (!this.getUserLoggedIn()) { // promised
    //   return false;
    // }
    // console.log("AppHelper.isUserLoggedIn() 1");
    // let accessToken = this.getUserAccessToken();
    // if (accessToken === "") { // promised
    //   return false;
    // }
    // console.log("AppHelper.isUserLoggedIn() 2");
    // // let authorised = this.isUserAPILoggedIn(; // TODO try await here
    // this.isUserAPILoggedIn().then((authorised) => { // promised
    //   if (!authorised) {
    //     return false;
    //   }
    //   let userRole = this.getUserRole();
    //   if (userRole === "") {
    //     return false;
    //   }
    //   return true;
    // })
  }

  async isUserAPILoggedIn() {
    return await API.accessTokenLoginUser();
  }

  getUserLoggedIn = () => {
    let value = window.localStorage.getItem("loggedIn");
    console.log('AppHelper.getUserLoggedIn()?: ' + value);
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

export default LocalStorageHelper;
