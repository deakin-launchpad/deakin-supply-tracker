import AppHelper from "helpers/AppHelper.js";
import { axiosClient } from "index.js";

class API {
  
  // POST requests

  buyItems = () => {
    axiosClient.post("crops/buyItems", {}, {
      headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error.status));
  }

  createItemRequest = (name, amount) => {
    axiosClient.post("crops/apicropscreateItemRequest", {
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
    axiosClient.post("crops/createItems", {
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
    axiosClient.post("user/register", {
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

  getItemHistory (data, stateHandler) {
    axiosClient.get("crops/getItemHistory/"+data.itemId)
    .then((response) => {
      stateHandler({
        temp: response.data.data.data
      })
    })
    .catch((error) => console.log(error));
  }

  getMarketRequest(stateHandler) {
    axiosClient.get("crops/getMarketRequest",{
      headers:{ Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
    .then((response) => {
      stateHandler({
        temp: response.data.data.cropRequest,
        statusCode: response.status
      })
    })
    .catch((error) => console.log(error));
  }

  getRequestDetail(data,stateHandler) {
    axiosClient.get("crops/getItemRequest/"+data.requestId,{
      headers:{ Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
    .then((response) => {
      stateHandler({
        requestData:response.data.data.requestData,
        temp: response.data.data.requestBids
      })
    })
    .catch((error) => console.log(error));
  }

  // GET requests
}

const instance = new API();

export default instance;
