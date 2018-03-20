import React from 'react';

class ToggleCompo extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        shown: true,
     };
     this.toggleclass = this.toggleclass.bind(this);
  }
  toggleclass(){
    this.setState({
      shown: !this.state.shown
    });
  }
   render() {
     var hidden = {
       display: this.state.shown ? "block" : "none"
     }
      return (
         <div>
           <button type="button" onClick={this.toggleclass.bind(this)}>Click Me!</button>
           <input style={hidden} type="text" />
         </div>
      );
   }
}
export default ToggleCompo;
