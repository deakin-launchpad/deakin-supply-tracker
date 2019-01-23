import React, { Component } from 'react';
import API from 'helpers/api.js';
import LoadingComponent from 'components/loading/loading.jsx';

class OngoingRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: []
    }
  }

  stateHandler = (temp) => {
    this.setState(temp)
  }

  getOngoingRequest = () => {
    API.getOngoingRequest(this.stateHandler);
    console.log("state", this.state)
  }

  componentDidMount() {
    this.getOngoingRequest()
  }

  render() {
    if (this.state.statusCode === '') return (<LoadingComponent />);
    else if (this.state.statusCode === 200 && this.state.temp.length === 0) return (
      <div>
        <h2>My Ongoing Requests</h2>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Ordered Item</th>
              <th>Item Amount</th>
              <th>Created On</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <p>No records found.</p>
      </div>
    )
    return (
      <div className="my-bids-page">
        <h2 className="center-align">My Ongoing Requests</h2>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Ordered Item</th>
              <th>Item Amount</th>
              <th>Created On</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.temp.map((value) => (
                <tr key={value._id}>
                  <td>{value.itemOrdered}</td>
                  <td>{value.itemAmount}</td>
                  <td>{value.creationDate.substring(0, 10)}</td>
                  <td><a href={"/requestdetail/" + value._id} className="waves-effect waves-light btn">Details</a></td>
                </tr>
              )
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default OngoingRequest;