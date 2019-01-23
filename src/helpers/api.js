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

  createBid = (data) => {
    console.log(data)
    axiosClient.post("crops/createBid", {
      requestId: (data.requestId).toString(),
      amountOfItems: Number(data.amountOfItems),
      priceOffered: Number(data.priceOffered),
      dateOfDelivery: data.dateOfDelivery,
      bidView: data.bidView,
    },
      {
        headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.status));
  }

  createItemRequest = (name, amount) => {
    axiosClient.post("crops/createItemRequest", {
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

  registerUser(data) {
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

  getItemHistory(data, stateHandler) {
    axiosClient.get("crops/getItemHistory/" + data.itemId)
      .then((response) => {
        stateHandler({
          temp: response.data.data.data
        })
      })
      .catch((error) => console.log(error));
  }

  getMarketRequest(stateHandler) {
    axiosClient.get("crops/getMarketRequest", {
      headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
      .then((response) => {
        stateHandler({
          temp: response.data.data.cropRequest,
          statusCode: response.status
        })
      })
      .catch((error) => console.log(error));
  }

  getRequestDetail(data, stateHandler) {
    axiosClient.get("crops/getItemRequest/" + data.requestId, {
      headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
    })
      .then((response) => {
        stateHandler({
          requestData: response.data.data.requestData,
          flag: response.data.data.flag,
          bidFlag: response.data.data.bidFlag,
          temp: response.data.data.requestBids
        })
      })
      .catch((error) => console.log(error));
  }

  getMyBid(stateHandler) {
    axiosClient.get("crops/getMyBid", {
      headers: { Authorization: " Bearer " + AppHelper.getUserAccessToken() }
    })
      .then((response) => {
        stateHandler({
          temp: response.data.data.requestData,
          statusCode: response.status,
        })
      })
  }

  getMyRequest(stateHandler) {
    axiosClient.get("crops/getMyRequest", {
      headers: { Authorization: " Bearer " + AppHelper.getUserAccessToken() }
    })
      .then((response) => {
        console.log(response)
        stateHandler({
          temp: response.data.data.requestData,
          statusCode: response.status,
        })
      })
  }
  getOngoingRequest(stateHandler) {
    axiosClient.get("crops/getOngoingRequest", {
      headers: { Authorization: " Bearer " + AppHelper.getUserAccessToken() }
    })
      .then((response) => {
        console.log(response)
        stateHandler({
          temp: response.data.data.requestData,
          statusCode: response.status,
        })
      })
  }
  getProfileRequest(stateHandler) {
    axiosClient.get("user/getProfile", {
      headers: { Authorization: " Bearer " + AppHelper.getUserAccessToken() }
    })
      .then((response) => {
        console.log(response)
        stateHandler({
          profileData: response.data.data.userDetails,
          statusCode: response.status,
        })
      })
  }
  acceptBidRequest(requestId, bidId) {
    axiosClient.post("crops/acceptBid",
      {
        requestId: requestId,
        bidId: bidId
      },
      {
        headers: { Authorization: "Bearer " + AppHelper.getUserAccessToken() }
      }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }
  // GET requests
}

const instance = new API();

export default instance;
