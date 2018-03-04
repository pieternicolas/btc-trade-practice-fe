import React from 'react';
import { connect } from 'react-redux';

import Form from './../../components/Form';

import { signin } from './../../controllers/session/actions.js';


export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			credentials: {
				email: 'lol@dfd.com',
				password: 'asdf'
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
			<div className="container">
				Login

				<Form fields={this.state.credentials} onFormInput={(e) => this.handleFormInput(e)} onFormSubmit={(e) => this.signin(e)}>

					<input name="email" validate={['required', 'email']} label="Username" className="form-control"/>
					<input type="password" name="password" validate={['required']}/>

					<button type="submit">Login</button>

				</Form>
			</div>
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
