import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './styles/index.css';

function mapStateToProps(state) {
	return {
		isActive: state.styling.sidebarActive
	};
}

export class Sidebar extends React.Component {
	render() {
		return (
			<div className={`sidebar ${this.props.isActive ? 'active' : ''}`}>
				<div className="sidebar-header">
					<h4 className="text-center py-3">Dashboard</h4>
				</div>

				<ul className="list-group">
					<li className="list-group-item">test</li>
					<li>
						<NavLink to="/dashboard/asdf" className="list-group-item">adfdsfs</NavLink>
					</li>
					<li className="list-group-item">adfs</li>
				</ul>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(Sidebar)
