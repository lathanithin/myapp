import React from 'react';

class TimerChild extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       minutesCount: 0
     }
     this.upadateTimer = this.upadateTimer.bind(this);
   }
   upadateTimer(){

   }
   shouldComponentUpdate(nextProps, nextState){
     if((this.props.seconds%10)===0){
       this.setState({
         minutesCount: this.state.minutesCount + 1
       });
          console.log(this.state.minutesCount);
     }
     return true;
   }
   render() {
     // console.log(this.state.minutesCount);
     // console.log(this.props.seconds);
      return (
         <div>
          <p>Timer Value: {this.props.seconds}</p>
          <p>Minutes : {this.state.minutesCount} </p>
         </div>
      );
   }
}
export default TimerChild;
