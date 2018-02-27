import React from 'react';
import { connect } from 'react-redux';

import { signin } from './../../controllers/session/actions.js';


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

	handleFormInput(e) {
		this.setState({
			credentials: Object.assign({}, this.state.credentials, {[e.target.id]: e.target.value})
		});
	}

	render() {
		return (
			<div>
				Login
				<pre>{JSON.stringify(this.props.session)}</pre>

				<input type="text" id="id" value={this.state.credentials.id} onChange={(e) => this.handleFormInput(e)}/>

				<button onClick={() => this.props.onLoginClick(this.state.credentials)}>test</button>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		session: state.session
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginClick: (credentials) => {
			dispatch(signin(credentials));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
