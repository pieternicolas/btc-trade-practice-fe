import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicHeader = (props) => {
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
	)
}

export default PublicHeader;