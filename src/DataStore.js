import React from 'react';
import firebase from 'firebase';
var firebaseData='';
var id,Address_Node,test;
var details=[];
var contactNum;
var cnum=[];
var det=[];
class DataStore extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      firebaseData:'',
      test : ''
    }
   this.lastUpadate = this.lastUpadate.bind(this);
  }
  lastUpadate(data)
  {
    this.setState({
      firebaseData:data.Personal_Details_Node[101].contactNumber,
      // firebaseData : details[0]
    });
  }
  componentWillMount()
  {
    var config = {
      apiKey: "AIzaSyBbeUrBLa7oVLXz35mQO86VlC5X-mgJIKc",
       authDomain: "micky-73a21.firebaseapp.com",
       databaseURL: "https://micky-73a21.firebaseio.com",
       projectId: "micky-73a21",
       storageBucket: "micky-73a21.appspot.com",
       messagingSenderId: "420711477049"
     };
     const ACCESS_CONFIG = firebase.initializeApp(config);
     const rootRef = ACCESS_CONFIG.database().ref();
     rootRef.on("value",snap => {
      this.lastUpadate(snap.val());
       Address_Node = snap.val();
       Object.keys(Address_Node).map(function (key){
             id = Address_Node[key];
          return(
            Object.keys(id).map(function (key){
               contactNum = id[key];
               // console.log(contactNum);
               if(id[key].contactNumber){
                  // details.push(id[key].contactNumber);
                   // console.log(details)
                   // console.log(details[0]);
                   // console.log(typeof(details));
               }
            })
          )
       })
    })
         // const childRef = rootRef.child();
  }
   render() {

     console.log(details);
     // console.log(details[0]);

     // console.log(v instanceof (details));
    return (
         <div>
           {

           }
           Firebase Example.
           {this.state.firebaseData}

         </div>
      );
   }
}
export default DataStore;
