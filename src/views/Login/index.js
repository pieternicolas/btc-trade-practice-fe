import React from 'react';
import { connect } from 'react-redux';

import Form from './../../components/Form';

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
			credentials: { ...this.state.credentials, [e.target.name]: e.target.value }
		});
	}

	// render() {
	// 	return (
	// 		<div className="container">
	// 			Login
	// 			<pre>{JSON.stringify(this.props.session)}</pre>

	// 			<input type="text" name="id" value={this.state.credentials.id} onChange={(e) => this.handleFormInput(e)}/>

	// 			<button onClick={() => this.props.onLoginClick(this.state.credentials)}>test</button>
	// 		</div>
	// 	);
	// }

	signin() {
		console.log('login success')
		this.props.onLoginSubmit(this.state.credentials);
	}

	render() {
		return (
			<div className="container">
				Login
				<pre>{JSON.stringify(this.props.session)}</pre>

				<Form fields={this.state.credentials} onFormInput={(e) => this.handleFormInput(e)} onFormSubmit={(e) => this.signin(e)}>

					<input type="text" name="id" validate={['required', 'email']} label="fds" className="form-control"/>
					<input type="password" name="password" validate={['required']}/>

					<button type="submit">Save</button>

				</Form>
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
		onLoginSubmit: (credentials) => {
			dispatch(signin(credentials));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
