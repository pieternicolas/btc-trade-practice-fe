const wallet = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_WALLET':
			return Object.assign({}, state, action.wallet);

		default:
			return state;
	};
};

export default wallet;