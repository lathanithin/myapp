import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FireBase from './FirebaseExample.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // <App />,
   <FireBase/>,
  document.getElementById('root')
  );
registerServiceWorker();
