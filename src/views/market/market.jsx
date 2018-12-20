import React, { Component } from 'react';
import API from 'helpers/api.js';
import LoadingComponent from 'components/loading/loading.jsx';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusCode: '',
      temp: []
    }
  }

  stateHandler = (temp) => {
    this.setState(temp)
  }

  getMarketRequest = () => {
    API.getMarketRequest(this.stateHandler);

  }

  componentDidMount() {
    this.getMarketRequest();
  }

  componentWillUpdate() {


  }

  componentDidUpdate() {
  }



  render() {
    console.log(">>>>>", this.state.temp)
    if (this.state.statusCode === '') return (<LoadingComponent />);
    else if(this.state.statusCode === 200 && this.state.temp.length === 0) return (
      <div>
        <h2>Request Market</h2>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Item Ordered</th>
              <th>Item Amount</th>
              <th>Orderer Name</th>
              <th>Orderer Role</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <p>No records found.</p>
      </div>
    )
    return (
      <div className="market">
        <h2>Request Market</h2>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Item Ordered</th>
              <th>Item Amount</th>
              <th>Orderer Name</th>
              <th>Orderer Role</th>
              <th>Action</th>
            </tr>
          </thead>

            <tbody>
              {
                this.state.temp.map((value) => (
                  <tr key={value._id}>
                    <td>{value.itemOrdered}</td>
                    <td>{value.itemAmount}</td>
                    <td>{value.ordererId.firstName + " " + value.ordererId.lastName}</td>
                    <td>{value.ordererId.role}</td>
                    <td><a href={"/requestdetail/" + value._id} className="waves-effect waves-light btn">Details</a></td>
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>
    );
  }
}

export default Market;
