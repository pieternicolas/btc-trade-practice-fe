import React from 'react';
import { Link } from 'react-router-dom';

import PublicHeader from './components/PublicHeader.js';
import PublicFooter from './components/PublicFooter.js';

import './index.css';

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
				</p>
			</section>

			<PublicFooter></PublicFooter>
		</div>
  )
}

export default index;