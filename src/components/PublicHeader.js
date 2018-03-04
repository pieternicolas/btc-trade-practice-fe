import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function mapStateToProps(state) {
	return {
		session: state.session
	};
}

export class PublicHeader extends React.Component {
	render() {
		if (this.props.session.isLoggedIn) {
			return (
				<header className="masthead mb-auto">
					<div className="inner">
						<h4 className="masthead-brand">BTC on Wheels</h4>
						<nav className="nav nav-masthead justify-content-center">
							<NavLink exact to="/" className="nav-link">Home</NavLink>
							<NavLink to="/about" className="nav-link">About us</NavLink>
							<NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
						</nav>
					</div>
				</header>
			);
		} else {
			return (
				<header className="masthead mb-auto">
					<div className="inner">
						<h4 className="masthead-brand">BTC on Wheels</h4>
						<nav className="nav nav-masthead justify-content-center">
							<NavLink exact to="/" className="nav-link">Home</NavLink>
							<NavLink to="/about" className="nav-link">About us</NavLink>
							<NavLink to="/login" className="nav-link">Login</NavLink>
						</nav>
					</div>
				</header>
			);
		};
	};
};

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(PublicHeader)
