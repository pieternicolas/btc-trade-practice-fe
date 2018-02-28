import React from 'react';
import { Route } from 'react-router';

import './assets/scss/index.css';

import Header from './components/Header.js';
import Login from './views/Login';


export default class App extends React.Component {
	render() {
		return (
			<div className="text-center">
				<div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
					<Header></Header>
					<Route path="/" exact component={Login}></Route>
				</div>
			</div>
		);
	}
};