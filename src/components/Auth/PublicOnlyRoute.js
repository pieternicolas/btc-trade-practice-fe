import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

const locationHelper = locationHelperBuilder({});

const publicOnlyRoute = connectedRouterRedirect({
	// This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/dashboard',
	// This prevents us from adding the query parameter when we send the user away from the login page
	allowRedirectBack: false,
	 // If selector is true, wrapper will not redirect
	 // So if there is no user data, then we show the page
	authenticatedSelector: state => !state.session.isLoggedIn,
	// A nice display name for this check
	wrapperDisplayName: 'UserIsNotAuthenticated'
});

export default publicOnlyRoute;