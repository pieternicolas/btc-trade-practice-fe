// Main app load
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './config/registerServiceWorker';

// Global css imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// React router related imports
import { BrowserRouter } from 'react-router-dom';

// React redux related imports
import { Provider } from 'react-redux';
import store from './store.js';

window.jQuery = window.$ = require("jquery");
window.Popper = require('popper.js');
require("bootstrap");

ReactDOM.render((
	<Provider store={ store }>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	), document.getElementById('root')
);

registerServiceWorker();
