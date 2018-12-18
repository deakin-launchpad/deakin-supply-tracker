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

      transactionType = (value) => {
          let result;
          switch(value){
                case "CREATE_ITEMS":
                    result = "Created Items";
                    break;
                case "BUY_ITEMS":
                    result = "Bought Items";
                    break;
                default:
                    result = "";
                    break
          }
          return result;
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
      if (this.state.temp.length === 0) return (<LoadingComponent/>);
    return (
        <div className="itemHistory">
        <h4>Goat Cheese Jar 550g</h4>
        <img className="itemImage" src="https://cdn0.woolworths.media/content/wowproductimages/large/663973.jpg" alt="itemImage" />
            <section className="cd-timeline js-cd-timeline">
		        <div className="cd-timeline__container">
                    {
                        this.state.temp.map((value)=>(
                            <div key = {value._id} className="cd-timeline__block js-cd-block">
                                <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
                                    <img src={LocationImage} alt=""/>
                                </div>
                       
                                <div className="cd-timeline__content js-cd-content">
                                    <ul>
                                        <li>Transaction Type: {this.transactionType(value.transactionType)}</li>
                                        <li>Price: $ {value.itemId.price}</li>
                                        <li>Reciever: {value.ownerId.firstName+" "+value.ownerId.lastName+" ("+value.ownerId.role+")"}</li>
                                        <li>Sender: {value.supplierId.firstName+" "+value.supplierId.lastName+" ("+value.supplierId.role+")"}</li>
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
