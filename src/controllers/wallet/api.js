import axios from 'axios';


export const getWallet = async (identifier) => {
	try {
		const result = await axios({
			method: 'get',
			url: 'https://api.iextrading.com/1.0/stock/market/list/mostactive'
		});
		return result;
	} catch(e) {
		return new Error(e);
	};
};