import * as api from './api.js';
import { toggleLoader } from './../styling/actions.js';


export const getWallet = (identifier) => {
	return (dispatch) => {
		dispatch(toggleLoader());

		return new Promise ((resolve, reject) => {
			api.getWallet(identifier)
			.then(res => {
				const dataModifier = res.data.map(item => {
					return {
						symbol: item.symbol,
						name: item.companyName,
						value: item.iexRealtimePrice
					};
				});
				dispatch(updateWallet(dataModifier));
				dispatch(toggleLoader());
				resolve();
			})
			.catch(err => {
				dispatch(toggleLoader());
				reject(err);
			});
		});
	};
};

export const updateWallet = (data) => {
	return {
		type: 'UPDATE_WALLET',
		wallet: data
	};
};