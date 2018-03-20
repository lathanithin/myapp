import React from 'react';
import ChildOne from './ChildOne.js';
import ChildTwo from './ChildTwo.js';
import ChildThree from './ChildThree.js';
export {getAlert,latha} from './App.js';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        colorCode:{
          childonecolor : "#fff",
          childtwocolor : "#fff",
          childthreecolor : "#fff"
        },
        hi: 'Nithin',
        value: "white",
        value1: 'white',
        value2 : 'white'
      };
      this.change = this.change.bind(this);
   }

   change(event){
        this.setState({
            value: event.target.value,
             value1: event.target.value,
             value2: event.target.value
      });
    }

   render() {
      return (
         <div>
            <ChildOne  valueone={this.state.value} />
            <ChildTwo  valuetwo={this.state.value1}/>
            <ChildThree valuethree={this.state.value2}/>
            <p>NITHIN</p>
              <select id="lang" onChange={this.change} valuethree={this.state.value2} valueone={this.state.value} valuetwo={this.state.value1}>
                   <option value="red">red</option>
                   <option value="red">red</option>
                   <option value="blue">blue</option>
                   <option value="yellow">yellow</option>
                   <option value="yellow">yellow</option>
              </select>
         </div>
      );
   }
}
export default App;
