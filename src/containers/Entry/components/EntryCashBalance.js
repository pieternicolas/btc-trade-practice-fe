import React from 'react';

import Box from './../../../components/Box';


const EntryCashBalance = (props) => {
	return (
		<Box className="bg-info cash-balance">
			<div className="row">
				<div className="col-2">
					<div className="cash-balance-title">
						<i className="fas fa-dollar-sign"></i>
					</div>
				</div>

				<div className="col-10">
					<h4>Current cash value</h4>
					<h1>{props.wallet.value} $</h1>
				</div>
			</div>
		</Box>
	)
}

export default EntryCashBalance;
