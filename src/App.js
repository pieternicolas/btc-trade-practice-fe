import React from 'react';
import { Route } from 'react-router';

import 'animate.css/animate.min.css';
import './assets/scss/index.css';

import Header from './components/Header.js';
import Login from './views/Login';
import Home from './views/Home';


// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
// 					<Header></Header>
// 					<Route path="/" exact component={Login}></Route>
// 				</div>
// 			</div>
// 		);
// 	}
// };

export default class App extends React.Component {
	render() {
		return (
			<Home></Home>
		);
	}
};