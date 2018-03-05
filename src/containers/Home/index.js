import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicOnlyRoute from  './../../components/Auth/PublicOnlyRoute.js';
import PublicHeader from './../../components/PublicHeader.js';
import PublicFooter from './../../components/PublicFooter.js';
import Login from './../../containers/Login';
import SplashPage from './components/SplashPage.js';

import './styles/index.css';

const index = (props) => {
  return (
		<div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
			<PublicHeader></PublicHeader>

				<Switch>
					<Route path="/login" component={PublicOnlyRoute(Login)}></Route>
					<Route path="/" component={SplashPage}></Route>
				</Switch>
			
			<PublicFooter></PublicFooter>
		</div>
  )
}

export default index;