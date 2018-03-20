import React from 'react';
import TimerChild from './timerChild.js'

class Timer extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       currentCount: 1
     }
   }
   timer() {
     this.setState({
       currentCount: this.state.currentCount + 1
     })
     if(this.state.currentCount > 60) {
       clearInterval(this.intervalId);
     }
   }
   componentDidMount() {
     this.intervalId = setInterval(this.timer.bind(this), 1000);
   }
   componentWillUnmount(){
     clearInterval(this.intervalId);
   }
   render() {
     // console.log(this.state.currentCount);
      return (
         <div>
          <p>Timer : {this.state.currentCount}</p>
          <TimerChild seconds={this.state.currentCount}/>
         </div>
      );
   }
}
export default Timer;
