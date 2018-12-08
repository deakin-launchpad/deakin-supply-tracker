import React, { Component } from 'react';
import API from 'helpers/api.js';
import LocationImage from 'images/cd-icon-location.svg';
import LoadingComponent from 'components/loading/loading.jsx';

class ItemHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemId:this.props.match.params.itemId,
          temp: []
        }
      }

      stateHandler = (temp) => {
        this.setState(temp)
      }

      getItemHistoryDetails = () => {
        API.getItemHistory(this.state, this.stateHandler);

      }

       itemData (){
        
       }

      componentDidMount(){
        this.getItemHistoryDetails();
      }

      componentWillUpdate(){
        
        
      }

      componentDidUpdate(){
      }
  


  render() {
      {console.log(">>>",this.state.temp)}
      if (this.state.temp.length === 0) return (<LoadingComponent/>);
    return (
        <div className="itemHistory">
            <section className="cd-timeline js-cd-timeline">
		        <div className="cd-timeline__container">
                    {
                        this.state.temp.map((value)=>(
                            <div key = {value._id} className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
                                    <img src={LocationImage} alt=""/>
                                </div>
                       
                                <div className="cd-timeline__content js-cd-content">
                                    <h3>{value.itemId.itemName}</h3>
                                    <ul>
                                        <li>Transaction Type: {value.transactionType}</li>
                                        <li>Price: {value.itemId.price}</li>
                                        <li>Owner Name: {value.ownerId.firstName+" "+value.ownerId.lastName}</li>
                                        <li>Supplier Name: {value.supplierId.firstName+" "+value.supplierId.lastName}</li>
                                        <li>Item Exchanged: {value.itemExchanged}</li>
                                    </ul>
                                    <span className="cd-timeline__date">{(value.currentTime).substring(0, 10)}</span>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </section>
        </div>
    );
  }
}

export default ItemHistory;
