import axios from 'axios';


export const signin = async (data) => {
	try {
		const result = await axios({
			method: 'get',
			url: 'http://www.colr.org/json/color/random'
		});
		return result;
	} catch(e) {
		return new Error(e);
	};
};