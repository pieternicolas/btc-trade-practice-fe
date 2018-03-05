import React from 'react';
import { Link } from 'react-router-dom';

import AccountDropdown from './components/AccountDropdown.js';

import './styles/index.css';


const Header = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
    	<div className="container-fluid justify-content-between">
    		<Link to="/" className="navbar-brand">Home</Link>

    		<AccountDropdown></AccountDropdown>
    	</div>
    </nav>
  )
}

export default Header;