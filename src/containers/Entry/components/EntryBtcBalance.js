import React from 'react';

import Box from './../../../components/Box';


const EntryBtcBalance = (props) => {
	return (
		<Box className="bg-info btc-balance">
			<div className="row">
				<div className="col-md-2 col-4">
					<div className="btc-balance-title">
						<i className="fab fa-btc"></i>
					</div>
				</div>

				<div className="col-md-10 col-8">
					<h4>Current bitcoin value</h4>
					<h1>{props.wallet.value} btc</h1>
				</div>
			</div>
		</Box>
	)
}

export default EntryBtcBalance;
