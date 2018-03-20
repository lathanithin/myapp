import React from 'react';
// import {latha} from './App.js';

class ChildTwo extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       statevalue : this.props.valuetwo
     };
  }
    shouldComponentUpdate(nextProps, nextState){
      if(this.props.valuetwo!==nextProps.valuetwo){
         console.log("color can't be updated");
          return false;
      }
      else{
        return true;
      }
    }
    componentWillReceiveProps(nextProps){
      this.setState({
           statevalue: "green"
      });
    }
   render() {
     // console.log(this.state.statevalue);
     console.log("child two upadated");
     let defaultmsg;
     if(true){
       defaultmsg = (
         <div>
            <p  style={{backgroundColor:this.state.statevalue}}>{this.state.statevalue}</p>
         </div>
       )
     }
      return (
         <div>
            <h2>Hi i am Second child</h2>
             {defaultmsg}
         </div>
      );
   }
}
export default ChildTwo;
