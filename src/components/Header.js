import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
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
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};