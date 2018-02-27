import React from 'react';
import './assets/css/App.css';
import './assets/css/index.css';

import Header from './components/Header.js';
import Login from './views/Login';

class App extends React.Component {
	render() {
		return (
			<div className="">
				<Header></Header>
				<Login></Login>
			</div>
		);
	}
};

export default App;