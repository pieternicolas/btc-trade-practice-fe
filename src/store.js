import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import session from './controllers/session/reducers.js';
import styling from './controllers/styling/reducers.js';
import wallet from './controllers/wallet/reducers.js';


const appReducer = combineReducers({

	session,
	styling,
	wallet

});


const rootReducer = (state, action) => {
	if (action.type === 'SESSION_LOGOUT') {
		state = undefined;
	};
	return appReducer(state, action);
};

export default createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));