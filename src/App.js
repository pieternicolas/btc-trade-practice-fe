import React from 'react';
import { Route } from 'react-router-dom';

import 'animate.css/animate.min.css';
import './assets/scss/index.css';

import PrivateOnlyRoute from  './components/Auth/PrivateOnlyRoute.js';
import PublicOnlyRoute from  './components/Auth/PublicOnlyRoute.js';
import Login from './views/Login';
import Home from './containers/Home';
import Box from './components/Box';


export default class App extends React.Component {
	render() {
		return (
			<div className="h-100 w-100">
				<Route path="/" exact component={Home}></Route>
				<Route path="/login" component={PublicOnlyRoute(Login)}></Route>
				<Route path="/dashboard" component={PrivateOnlyRoute(Box)}></Route>
			</div>
		);
	}
};