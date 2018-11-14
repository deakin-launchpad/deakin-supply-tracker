const axios = require('axios').create({
  baseURL: 'http://35.163.217.253:8000/api/'
});

class API {
  
  // POST requests
  loginUser = (data) => {
    axios.post("user/login", {
      emailId: data.emailId,
      password: data.password
    })
    .then((response) => {
      console.log(response.data.data.userDetails.role);
      if (response.status === 200) {
        window.location.href = "/" + response.data.data.userDetails.role.toLowerCase();
      }
    })
    .catch((error) => console.log(error.status));
  }

  registerUser (data) {
    axios.post("user/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
      password: data.password,
      role: data.role
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

  accessTokenLoginUser(data) {
    axios.post("user/accessTokenLogin", {

    });
  }

  // GET requests
}

export default API;
