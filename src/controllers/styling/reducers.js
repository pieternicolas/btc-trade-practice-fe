const defaultState = {
	sidebarActive: false
};

const styling = (state = defaultState, action) => {
	switch (action.type) {
		case 'TOGGLE_SIDEBAR':
			return {...state, sidebarActive: !state.sidebarActive};

		default:
			return state;
	};
};

export default styling;