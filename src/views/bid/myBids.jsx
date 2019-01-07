import React, { Component } from 'react';
import API from 'helpers/api.js';
import LoadingComponent from 'components/loading/loading.jsx';

class MyBids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: []
    }
  }

  stateHandler = (temp) => {
    this.setState(temp)
  }

  getMyBid = () => {
    API.getMyBid(this.stateHandler);
  }

  componentDidMount() {
    this.getMyBid()
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
        <h2 className="center-align">My Bids</h2>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Amount</th>
              <th>Price offered</th>
              <th>Bid Date</th>
              <th>Bid Status</th>
              <th>Date of Delivery</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.temp.map((value) => (
                <tr key={value._id}>
                  <td>{value.requestId.itemOrdered}</td>
                  <td>{value.amountOfItems}</td>
                  <td>{value.priceOffered}</td>
                  <td>{value.creationDate.substring(0, 10)}</td>
                  <td>{value.bidStatus}</td>
                  <td>{value.dateOfDelivery.substring(0, 10)}</td>
                </tr>
              )
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MyBids;