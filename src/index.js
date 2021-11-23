// node module imports
import React from 'react'; // core lib
import ReactDOM from 'react-dom'; // responsible for rendering the comp in DOM

//custom imports
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; // custom css
import App from './App';
import reportWebVitals from './reportWebVitals';

// App Comp is rendered in div element
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
