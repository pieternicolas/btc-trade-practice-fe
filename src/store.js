import { combineReducers } from 'redux';

import session from './controllers/session/reducers.js';


const appReducer = combineReducers({

	session

});

const rootReducer = (state, action) => {
	if (action.type === 'SESSION_LOGOUT') {
		state = undefined;
	};
	return appReducer(state, action);
};


export default rootReducer;