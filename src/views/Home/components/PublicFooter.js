import React from 'react';
import moment from 'moment';

const currentYear = moment().format('YYYY');

const PublicFooter = (props) => {
	return (
		<footer className="mastfoot mt-auto">
			<div className="inner">
				<p>Copyright © {currentYear} - Nicolas Pieter</p>
			</div>
		</footer>
	)
}

export default PublicFooter;