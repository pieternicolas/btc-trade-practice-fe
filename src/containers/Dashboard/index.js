import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';
import Loader from './../../components/Loader';

import Entry from './../Entry';

import './styles/index.css';


function mapStateToProps(state) {
	return {
		sidebarActive: state.styling.sidebarActive,
		loaderActive: state.styling.loaderActive
	};
}

export class Dashboard extends React.Component {
	render() {
		return (
			<div className="h-100 w-100">
				<Loader isActive={this.props.loaderActive}></Loader>

				<Header></Header>

				<Sidebar></Sidebar>

				<div className={`container-fluid pt-3 ${this.props.sidebarActive ? 'sidebar-active' : ''}`}>
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
