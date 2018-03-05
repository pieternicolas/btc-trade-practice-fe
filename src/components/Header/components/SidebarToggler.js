import React from 'react';
import { connect } from 'react-redux';

import { toggleSidebar } from './../../../controllers/styling/actions.js';


function mapStateToProps(state) {
	return {
		isActive: state.styling.sidebarActive
	};
};

function mapDispatchToProps(dispatch) {
	return {
		onButtonClick: () => {
			dispatch(toggleSidebar());
		}
	};
};

export class SidebarToggler extends React.Component {
	render() {
		return (
			<div className={`sidebar-toggler ${this.props.isActive ? '' : 'active'}`}>
				<button className={`btn float-right ${this.props.isActive ? 'btn-outline-dark' : 'btn-dark'}`} onClick={() => this.props.onButtonClick()}>
					<i className="fas fa-bars"></i>
				</button>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarToggler)
