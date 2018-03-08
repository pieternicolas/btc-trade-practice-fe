import * as api from './api.js';


export const getWallet = (identifier) => {
	return (dispatch) => {
		api.getWallet(identifier)
		.then(response => {
			dispatch(updateWallet(response.data));
		});
	};
};

export const updateWallet = (data) => {
	return {
		type: 'UPDATE_WALLET',
		wallet: data
	};
};