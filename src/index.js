import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
	console.log(request);
	//Edit request
	return request;
})
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
