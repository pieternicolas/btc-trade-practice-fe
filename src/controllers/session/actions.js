import * as api from './api.js';
import { toggleLoader } from './../styling/actions.js';


export const signin = (credentials) => {
	return (dispatch) => {
		dispatch(toggleLoader());

		const modifiedCredentials = {
			id: credentials.email,
			password: credentials.password
		};

		api.signin(modifiedCredentials)
		.then(response => {
			dispatch(beginSession(Object.assign({}, response.data, credentials, modifiedCredentials, { isLoggedIn: true })));
			dispatch(toggleLoader());
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