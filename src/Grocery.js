import React from 'react';
import Cart  from './Cart.js'

class Grocery extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      selectedItem : "",
      selectedQuantity : "",
      testItem : "",
      testQuantity : ""
    }
    this.updatedItem = this.updatedItem.bind(this);
    this.printItem = this.printItem.bind(this);
    this.updatedQuntity = this.updatedQuntity.bind(this);
  }
  updatedItem(event){
    this.setState({
      selectedItem : event.target.value
    });
  }
  printItem(){
    if(this.state.selectedItem){
      this.setState({
        testItem : this.state.selectedItem
      });
    }
    if(this.state.selectedQuantity){
      this.setState({
        testQuantity : this.state.selectedQuantity
      });
    }
  }
  updatedQuntity(event){
    this.setState({
      selectedQuantity : event.target.value
    });
  }

   render() {
      return (
         <div>
           <form>
              <select name="groceries" onChange={this.updatedItem}>
               <option value="soap">Soap</option>
               <option value="shampoo">Shampoo</option>
               <option value="paste">Paste</option>
               <option value="brush">Brush</option>
              </select>
              <select name="Quantity" onChange={this.updatedQuntity} >
                 <option value="10">10</option>
                 <option value="20">20</option>
                 <option value="30">30</option>
                 <option value="40">40</option>
              </select>
              <br/> <br/>
               <button type="button" onClick={this.printItem}>SUBMIT BUTTON</button>
            </form>
            <div className="div-top">
                <Cart  item={this.state.testItem} quantity={this.state.testQuantity}/>
            </div>
         </div>
      );
   }
}
export default Grocery;
