import React from 'react';
import { connect } from 'react-redux';

import * as sessionActions from './../../controllers/session/actions.js';


const mapStateToProps = (state) => {
	return state;
}

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			credentials: {
				id: 'lol',
				password: 'asdf'
			}
		};
	}

	render() {
		return (
			<div>
				Login
				<pre>{JSON.stringify(this.props.session)}</pre>
				<button onClick={() => this.props.signin(this.state.credentials)}>test</button>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	sessionActions
)(Login)
