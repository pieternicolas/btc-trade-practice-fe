import * as api from './api.js';


export const getWallet = (identifier) => {
	return (dispatch) => {
		api.getWallet(identifier)
		.then(response => {
			const dataModifier = response.data.map(item => {
				return {
					symbol: item.symbol,
					name: item.companyName,
					value: item.iexRealtimePrice
				};
			});
			dispatch(updateWallet(dataModifier));
		});
	};
};

export const updateWallet = (data) => {
	return {
		type: 'UPDATE_WALLET',
		wallet: data
	};
};