import axios from 'axios';


// export const sessionLogin = (credentials) => ({
// 	type: 'SESSION_LOGIN',
// 	id: credentials.id,
// 	password: credentials.password
// });

export const signin = (credentials) => {
	console.log(credentials)
	return (dispatch) => {
		return axios({
			method: 'get',
			url: 'http://www.colr.org/json/color/random'
		})
		.then(response => {
			dispatch(beginSession(Object.assign({}, response.data, credentials)));
		});
	};
};

export const beginSession = (userData) => {
	return {
		type: 'SESSION_LOGIN',
		data: Object.assign({}, userData, { isLoggedIn: true })
	};
};

export const signout = () => {
	return {
		type: 'SESSION_LOGOUT'
	};
};