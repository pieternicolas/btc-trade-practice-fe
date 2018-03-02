import React from 'react';
import { Link, Route } from 'react-router-dom';

import PrivateOnlyRoute from  './../../components/Auth/PrivateOnlyRoute.js';
import PublicOnlyRoute from  './../../components/Auth/PublicOnlyRoute.js';
import PublicHeader from './components/PublicHeader.js';
import PublicFooter from './components/PublicFooter.js';
import Login from './../../views/Login';

import './styles/index.css';

const index = (props) => {
  return (
		<div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
			<PublicHeader></PublicHeader>

			<section className="inner cover">
				<h1 className="cover-heading">BTC Trading Practice</h1>
				<p className="lead">
					This is an app to simulate Bitcoin trading without the risk of losing actual funds. It uses real prices and fluctuations as the real Bitcoin does in realtime (in Rupiah).
				</p>
				<p className="lead">
					<Link to="/dashboard" className="btn btn-lg btn-secondary">Start Now</Link>
					<Link to="/login" className="btn btn-lg">LOGIN</Link>
				</p>
			</section>



			<Route path="/login" component={PublicOnlyRoute(Login)}></Route>

			<Route path="/dashboard" component={PrivateOnlyRoute(PublicFooter)}></Route>

			<PublicFooter></PublicFooter>
		</div>
  )
}

export default index;