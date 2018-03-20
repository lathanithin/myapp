import React from 'react';

class ChildThree extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       thirdstatevalue : this.props.valuethree
     };
  }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.props.valuethree===nextProps.valuethree){
    //        console.log("child three same  color can't be updated");
    //         return false;
    //     }
    //     else{
    //       return true;
    //     }
    // }
    componentWillReceiveProps(nextProps,newState){
      if(this.props.valuethree===nextProps.valuethree){
        this.setState({
            thirdstatevalue : "green"
        });
        console.log("update green color");
        return false;
      }
    }
    // shouldComponentUpdate(prevProps){
    //    if(this.props.valuethree!==prevProps.valuethree){
    //        this.setState({
    //          thirdstatevalue: "green"
    //       });
    //    }
    //   console.log(this.props.valuethree);
    //   console.log(prevProps.valuethree);
    // }
   render() {
     console.log("child three updated");
     console.log(this.state.thirdstatevalue);
     // console.log(this.state.thirdstatevalue);
     // <p style={{backgroundColor:this.state.thirdstatevalue}}>{this.state.thirdstatevalue}</p>
      return (
         <div>
            <h3>I am third child</h3>
            <p style={{backgroundColor:this.state.thirdstatevalue}}>{this.state.thirdstatevalue}</p>
         </div>
      );
   }
}
export default ChildThree;
