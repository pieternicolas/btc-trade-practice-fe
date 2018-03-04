import React from 'react';
import { Link, Route } from 'react-router-dom';

import PublicOnlyRoute from  './../../components/Auth/PublicOnlyRoute.js';
import PublicHeader from './../../components/PublicHeader.js';
import PublicFooter from './../../components/PublicFooter.js';
import Login from './../../views/Login';
import SplashPage from './components/SplashPage.js';

import './styles/index.css';

const index = (props) => {
  return (
		<div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
			<PublicHeader></PublicHeader>

			<Route path="/" exact component={SplashPage}></Route>

			<Route path="/login" component={PublicOnlyRoute(Login)}></Route>
			
			<PublicFooter></PublicFooter>
		</div>
  )
}

export default index;