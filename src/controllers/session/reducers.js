const session = (state = {}, action) => {
	switch (action.type) {
		case 'SESSION_LOGIN':
			if (action.data.stayLoggedIn) {
				localStorage.setItem('sessionData', JSON.stringify(action.data));
			};
			return Object.assign({}, state, action.data);

		case 'SESSION_LOGOUT':
			localStorage.removeItem('sessionData');
			return state;

		default:
			return state;
	};
};

export default session;