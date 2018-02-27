import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signout } from './../controllers/session/actions.js';


export class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<div className="container justify-content-between">
					<Link to="/" className="navbar-brand">Home</Link>

					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Account
						</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
							<button className="dropdown-item" onClick={() => {this.props.onLogoutClick()}}>Logout</button>
						</div>
					</div>
				</div>
			</nav>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		session: state.session
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogoutClick: (credentials) => {
			dispatch(signout());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);