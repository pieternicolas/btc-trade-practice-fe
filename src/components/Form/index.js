import React from 'react';
import validator from './validators';

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		const validationRequirements = props.children.filter(item => {
			return item.type === 'input';
		}).map(item => {
			return {
				name: item.props.name,
				rule: item.props.validate
			};
		});

		this.state = {
			validationRules: validationRequirements,
			errors: [],
			isClean: true,
			hasBeenSubmitted: false
		};
	}

	errorChecking() {
		let errors = [];

		this.state.validationRules.forEach(item => {
			item.rule.forEach(rule => {
				const fieldBeingTested = {
					name: item.name,
					value: this.props.fields[item.name]
				};

				if (validator[rule](fieldBeingTested) !== true) {
					errors.push({
						name: item.name,
						error: rule,
						message: validator[rule](fieldBeingTested)
					});
				};
			});
		});

		this.setState({ errors: errors });
		if (!errors.length) return true
			else return false;
	}

	handleFieldChange(e) {
		this.setState({ isClean: false });
		this.props.onFormInput(e);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ isClean: false });
		this.setState({ hasBeenSubmitted: true });
		if (this.errorChecking()) {
			this.props.onFormSubmit();
		} else {
			console.log('login failed')
		};
	}

	render() {
		const fields = this.props.children.filter(item => {
			return item.type === 'input';
		}).map((item, index) => {
			if (item.props.label !== null) {
				return (

					<div key={index} className="form-group">
						<label htmlFor={item.props.name}>{item.props.label}</label>

						<input
							type={item.props.type ? item.props.type : 'text'}
							name={item.props.name}
							className={item.props.className}
							value={this.props.fields[item.props.name]}
							onChange={(e) => this.handleFieldChange(e)}
						/>
					</div>

				);
			} else {
				return (

					<input
						key={index}
						type={item.props.type}
						name={item.props.name}
						value={this.props.fields[item.props.name]}
						onChange={(e) => this.handleFieldChange(e)}
					/>

				);
			}
		}).map(item => {
			// console.log(item);
			return item;
		});

		const submitButton = this.props.children.find(item => {
			return item.props.type === 'submit';
		});

		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>

				{fields}

				{submitButton}

			</form>
		);
	}
}
