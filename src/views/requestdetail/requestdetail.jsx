import React, { Component } from 'react';
import API from 'helpers/api.js';
import Modal from 'components/modal.jsx';
import LoadingComponent from 'components/loading/loading.jsx';

class RequestDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestId: this.props.match.params.requestId,
            requestData: "",
            temp: []
        }
    }

    stateHandler = (temp) => {
        this.setState(temp)
    }

    capitalizeString = (string) => {
        return string.charAt(0) + string.slice(1).toLowerCase();
    }

    getRequestDetail = () => {
        API.getRequestDetail(this.state, this.stateHandler);

    }

    componentDidMount() {
        this.getRequestDetail();
    }

    componentWillUpdate() {


    }

    componentDidUpdate() {
    }

    renderModal = () => {
        return (
            <Modal title="Create Bid" id='modal1'>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <h3>Demo Bid Modal</h3>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-light btn-flat">Cancel</a>
                    <a href="#!" className="modal-close waves-effect waves-light btn-flat">Submit</a>
                </div>
            </Modal>
        );
    }



    render() {
        { console.log(">>>>>", this.state) }
        if (this.state.requestData === "") return (<LoadingComponent />);
        return (
            <div className="market">
                <h2>Request Detail</h2>
                <div className="row center-align">
                    <h5 className="col s4">Item Ordered: {this.capitalizeString(this.state.requestData.itemOrdered)}</h5>
                    <h5 className="col s4">Item Amount Ordered: {this.state.requestData.itemAmount}</h5>
                    <h5 className="col s4">Orderer Name: {this.state.requestData.ordererId.firstName + " " + this.state.requestData.ordererId.lastName}</h5>
                    <h5 className="col s4">Orderer Role: {this.capitalizeString(this.state.requestData.ordererId.role)}</h5>
                    <h5 className="col s4">Date of Creation: {(this.state.requestData.creationDate).substring(0, 10)}</h5>
                </div>

                <h2>Bids Offered</h2>
                <table className="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Bidder Name</th>
                            <th>Bidder Role</th>
                            <th>Amount Offered</th>
                            <th>Price Offered</th>
                            <th>Date of Delivery</th>
                            <th>Bid Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.temp.map((value) => (
                                <tr key={value._id}>
                                    <td>{value.bidderId.firstName + " " + value.bidderId.lastName}</td>
                                    <td>{value.bidderId.role}</td>
                                    <td>{value.amountOfItems}</td>
                                    <td>{value.priceOffered}</td>
                                    <td>{(value.dateOfDelivery).substring(0, 10)}</td>
                                    <td>{this.capitalizeString(f.bidStatus)}</td>
                                    <td><a href="#" className="waves-effect waves-light btn">Accept</a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="row default-margin center-align">
                    <button className="waves-effect submitBtn waves-light btn modal-trigger" data-target="modal1">Create a Bid</button>
                </div>
                {this.renderModal()}
            </div>
        );
    }
}

export default RequestDetail;
