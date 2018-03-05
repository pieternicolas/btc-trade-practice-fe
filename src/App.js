import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './assets/js/fontawesome-all.min.js';
import 'animate.css/animate.min.css';
import './assets/scss/index.css';

import PrivateOnlyRoute from  './components/Auth/PrivateOnlyRoute.js';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';


export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/dashboard" component={PrivateOnlyRoute(Dashboard)}></Route>
				<Route path="/" component={Home}></Route>
			</Switch>
		);
	}
};