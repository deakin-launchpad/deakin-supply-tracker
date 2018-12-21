import React, { Component } from 'react';
import API from 'helpers/api.js';
import LoadingComponent from 'components/loading/loading.jsx';

class MyRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: []
    }
  }

  stateHandler = (temp) => {
    this.setState(temp)
  }

  getMyRequest = () => {
    API.getMyRequest(this.stateHandler);
    console.log("state", this.state)
  }

  componentDidMount() {
    this.getMyRequest()
  }

  render() {
    console.log(">>>>>", this.state.temp)
    if (this.state.statusCode === '') return (<LoadingComponent />);
    else if(this.state.statusCode === 200 && this.state.temp.length === 0) return (
      <div>
        <h2>My Bids</h2>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Amount</th>
              <th>Orderer Role</th>
              <th>Date of Delivery</th>
              <th>Bid Status</th>
              <th>Bid Date</th>
            </tr>
          </thead>
        </table>
        <p>No records found.</p>
      </div>
    )
    return (
      <div className="my-bids-page">
        <p className="center-align">My Bids</p>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Ordered Item</th>
              <th>Item Amount</th>
              <th>Created On</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.temp.map((value) => (
                <tr key={value._id}>
                  <td>{value.itemOrdered}</td>
                  <td>{value.itemAmount}</td>
                  <td>{value.creationDate.substring(0, 10)}</td>
                </tr>
              )
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MyRequests;