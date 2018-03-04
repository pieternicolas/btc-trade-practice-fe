import * as api from './api.js';


export const signin = (credentials) => {
	return (dispatch) => {
		const modifiedCredentials = {
			id: credentials.email,
			password: credentials.password
		};

		api.signin(modifiedCredentials)
		.then(response => {
			dispatch(beginSession(Object.assign({}, response.data, credentials, modifiedCredentials)));
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