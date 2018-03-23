const defaultState = {
	sidebarActive: false,
	loaderActive: false
};

const styling = (state = defaultState, action) => {
	switch (action.type) {
		case 'TOGGLE_SIDEBAR':
			return { ...state, sidebarActive: !state.sidebarActive };

		case 'TOGGLE_LOADER':
			return { ...state, loaderActive: !state.loaderActive };

		default:
			return state;
	};
};

export default styling;