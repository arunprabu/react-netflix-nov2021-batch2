// node module imports
import React from 'react'; // core lib
import ReactDOM from 'react-dom'; // responsible for rendering the comp in DOM

//custom imports of global styles
import 'bootstrap/dist/css/bootstrap.css';

// ideal place for you to override bootstrap styles 
import './index.css'; // custom css

import App from './App';
import reportWebVitals from './reportWebVitals';

// App Comp is rendered in div element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
