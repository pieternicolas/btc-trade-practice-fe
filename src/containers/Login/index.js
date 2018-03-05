import React from 'react';
import { connect } from 'react-redux';

import Form from './../../components/Form';
import Box from './../../components/Box';

import { signin } from './../../controllers/session/actions.js';


export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			credentials: {
				email: 'asdf@fas.compo',
				password: 'asdfdss'
			}
		};
	}

	handleFormInput(e) {
		this.setState({
			credentials: { ...this.state.credentials, [e.target.name]: e.target.value }
		});
	}

	signin() {
		console.log('login success')
		this.props.onLoginSubmit(this.state.credentials);
	}

	render() {
		return (
			<Box className="mx-auto w-75">
				<h3>Members Login</h3>

				<Form fields={this.state.credentials} onFormInput={(e) => this.handleFormInput(e)} onFormSubmit={(e) => this.signin(e)}>

					<input name="email" validate={['required', 'email']} placeholder="Email" label="Email"/>
					<input type="password" name="password" validate={['required']} placeholder="Password" label="Password"/>

					<button className="btn btn-primary" type="submit">Login</button>

				</Form>
			</Box>
		);
	}
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginSubmit: (credentials) => {
			dispatch(signin(credentials));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
