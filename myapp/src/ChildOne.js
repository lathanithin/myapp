import React from 'react';

class ChildOne extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
      if(this.props.valueone===nextProps.valueone && this.props.valueone==="red" ){
          // console.log("Can not update same red color");
          return false;
      }
        return true;
    }
   render() {
     // console.log("child one updated");
      return (
         <div>
            <h1>HI i am first child</h1>
            <p style={{backgroundColor:this.props.valueone}}>{this.props.valueone}</p>
         </div>
      );
   }
}
export default ChildOne;
