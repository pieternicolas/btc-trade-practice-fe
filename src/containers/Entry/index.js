import React from 'react';
import { connect } from 'react-redux';

import EntryCashBalance from './components/EntryCashBalance.js';
import EntryBtcBalance from './components/EntryBtcBalance.js';

import { getWallet } from './../../controllers/wallet/actions.js';

import './styles/index.css';


function mapStateToProps(state) {
	return {
		wallet: state.wallet
	};
};

function mapDispatchToProps(dispatch) {
	return {
		loadWallet: async () => {
			return await dispatch(getWallet());
		}
	};
};

export class Entry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDone: false
		};
	}

	componentDidMount() {
		this.props.loadWallet()
		.then(() => {
			this.setState({ isDone: true });
		});
	}

	render() {
		if (!this.state.isDone) {
			return (
				<div></div>
			);
		};

		return (
			<div className="row">
				<div className="col-sm-6">
					<EntryBtcBalance wallet={this.props.wallet[1]}></EntryBtcBalance>
				</div>

				<div className="col-sm-6">
					<EntryCashBalance wallet={this.props.wallet[2]}></EntryCashBalance>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entry)
