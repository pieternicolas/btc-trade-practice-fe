import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';

import Entry from './../Entry';

import './styles/index.css';


function mapStateToProps(state) {
	return {
		isActive: state.styling.sidebarActive
	};
}

export class Dashboard extends React.Component {
	render() {
		return (
			<div className="h-100 w-100">
				<Header></Header>

				<Sidebar></Sidebar>

				<div className={`container-fluid pt-3 ${this.props.isActive ? 'sidebar-active' : ''}`}>
					<Switch>
						<Route path="/dashboard" exact component={Entry}></Route>
					</Switch>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(Dashboard)
