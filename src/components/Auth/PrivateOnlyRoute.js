import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

const privateOnlyRoute = connectedRouterRedirect({
	 // The url to redirect user to if they fail
	redirectPath: '/login',
	 // If selector is true, wrapper will not redirect
	 // For example let's check that state contains user data
	authenticatedSelector: state => state.session.isLoggedIn === true,
	// A nice display name for this check
	wrapperDisplayName: 'UserIsAuthenticated'
});

export default privateOnlyRoute;