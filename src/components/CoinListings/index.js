import React from 'react';

const CoinListing = (props) => {
	let data = props.coins;
	if (typeof data === 'object') {
		data = Object.values(data);
	};

	const coins = data.map((item, index) => {
		return (
			<tr key={index}>
				<th>{index + 1}</th>
				<th>{item.symbol}</th>
				<th>{item.name}</th>
				<th>{item.value}</th>
			</tr>
		);
	});

	return (
		<div className="table-responsive">
			<table className="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Symbol</th>
						<th>Name</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{coins}
				</tbody>
			</table>
		</div>
	);
}

export default CoinListing;