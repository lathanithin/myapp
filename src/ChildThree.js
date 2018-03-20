import React from 'react';

class ChildThree extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       thirdstatevalue : this.props.valuethree
     };
  }

    componentWillReceiveProps(nextProps,nextState){
      if(this.props.valuethree===nextProps.valuethree){
        setTimeout(function()
            {
              this.setState({
                thirdstatevalue : "black"
            }); }.bind(this), 2000);
        }
      else{
        this.setState({
            thirdstatevalue : nextProps.valuethree
        });
      }
    }
   render() {
       console.log("Child three updated");
      return (
         <div>
            <h3>I am third child</h3>
            <p style={{backgroundColor:this.state.thirdstatevalue}}>{this.state.thirdstatevalue}</p>
         </div>
      );
   }
}
export default ChildThree;
