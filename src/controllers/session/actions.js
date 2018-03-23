import * as api from './api.js';


export const signin = (credentials) => {
	return (dispatch) => {
		const modifiedCredentials = {
			id: credentials.email,
			password: credentials.password
		};

		api.signin(modifiedCredentials)
		.then(response => {
			dispatch(beginSession(Object.assign({}, response.data, credentials, modifiedCredentials, { isLoggedIn: true })));
		});
	};
};

export const beginSession = (userData) => {
	return {
		type: 'SESSION_LOGIN',
		data: userData
	};
};

export const signout = () => {
	return {
		type: 'SESSION_LOGOUT'
	};
};