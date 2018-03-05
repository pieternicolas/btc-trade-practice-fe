import React from 'react';
import { Link } from 'react-router-dom';

import AccountDropdown from './components/AccountDropdown.js';
import AccountDropdownMobile from './components/AccountDropdownMobile.js';
import SidebarToggler from './components/SidebarToggler.js';

import './styles/index.css';


const Header = (props) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<div>
					<SidebarToggler></SidebarToggler>

					<Link to="/" className="navbar-brand"> Home</Link>
				</div>

				<div>
					<AccountDropdown></AccountDropdown>
					<AccountDropdownMobile></AccountDropdownMobile>
				</div>
			</div>
		</nav>
	)
}

export default Header;