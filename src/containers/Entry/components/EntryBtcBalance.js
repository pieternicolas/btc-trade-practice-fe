import React from 'react';

import Box from './../../../components/Box';


const EntryBtcBalance = (props) => {
	return (
		<Box className="bg-info">
			<div className="row">
				<div className="col-3">
					<i className="fab fa-btc"></i>
				</div>

				<div className="col-9">
					{props.wallet.value}
				</div>
			</div>
		</Box>
	)
}

export default EntryBtcBalance;
