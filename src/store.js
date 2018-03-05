import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import session from './controllers/session/reducers.js';
import styling from './controllers/styling/reducers.js';


const appReducer = combineReducers({

	session,
	styling

});


const rootReducer = (state, action) => {
	if (action.type === 'SESSION_LOGOUT') {
		state = undefined;
	};
	return appReducer(state, action);
};

export default createStore(rootReducer, applyMiddleware(thunk));