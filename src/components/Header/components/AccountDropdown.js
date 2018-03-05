import React from 'react';
import { connect } from 'react-redux';

import { signout } from './../../../controllers/session/actions.js';


function mapStateToProps(state) {
	return {
		session: state.session
	};
};

function mapDispatchToProps (dispatch) {
	return {
		onLogoutClick: () => {
			dispatch(signout());
		}
	};
};

export class AccountDropdown extends React.Component {
	render() {
		return (
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{this.props.session.id}
				</button>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					<button className="dropdown-item" onClick={() => {this.props.onLogoutClick()}}>Logout</button>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AccountDropdown)
