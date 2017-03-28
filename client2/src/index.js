import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
// import './theme.min.css';
import './index.css';
import './App.css';
// import App from './App';
import Login from './Login';

const store = configureStore(); 



ReactDOM.render(
	<Provider store={store}>
  		<Login />
  	</Provider>,
  	document.getElementById('root')
);


// $(window).on('scroll', function(event) {
//     var scrollValue = $(window).scrollTop();
//     if (scrollValue == settings.scrollTopPx || scrollValue > 70) {
//          $('.button-list').addClass('is-sticky');
//     } 
// });