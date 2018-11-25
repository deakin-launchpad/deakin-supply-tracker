import AppHelper from "helpers/AppHelper.js";
import { client } from "index.js";

class API {
  
  // POST requests

  buyItems = () => {
    client.post("crops/buyItems", {}, {
      headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error.status));
  }

  createItemRequest = (name, amount) => {
    client.post("crops/apicropscreateItemRequest", {
      itemName: name,
      itemAmount: amount
    }, 
    {
      headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error.status));
  }

  createItems = (data) => {
    client.post("crops/createItems", {
      itemName: data.name,
      itemAmount: data.amount,
      price: data.price
    }, 
    {
      headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error.status));
  }

  registerUser (data) {
    client.post("user/register", {
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

  // GET requests
}

const instance = new API();

export default instance;
