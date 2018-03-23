export const toggleSidebar = () => {
	return {
		type: 'TOGGLE_SIDEBAR'
	};
};

export const toggleLoader = (status) => {
	return {
		type: 'TOGGLE_LOADER',
		status: status
	};
};