import React from 'react';

class Cart extends React.Component {
  // constructor(props) {
  //    super(props);
  //    this.state = {
  //      test : this.props.item,
  //      dispalyItem : "cart is empty"
  //    };
  // }

   render() {
      return (
         <div>
            <h4>item Name:{this.props.item}</h4>
            <h4>Quantity:{this.props.quantity}</h4>
         </div>
      );
   }
}
export default Cart;
