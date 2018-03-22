import React from 'react';

import Box from './../../../components/Box';


const EntryCashBalance = (props) => {
	return (
		<Box className="bg-info">
			<div className="row">
				<div className="col-3">
					<i className="fas fa-dollar-sign"></i>
				</div>

				<div className="col-9">
					{props.wallet.value}
				</div>
			</div>
		</Box>
	)
}

export default EntryCashBalance;
