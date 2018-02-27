// Main app load
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './config/registerServiceWorker';

// React redux related imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// React router related imports
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
	),
	document.getElementById('root')
);

registerServiceWorker();
