import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';

import Entry from './../Entry';

const index = (props) => {
  return (
    <div className="h-100 w-100">
    	<Header></Header>

    	<Sidebar></Sidebar>

			<div className="container-fluid pt-3">
				<Switch>
					<Route path="/dashboard" exact component={Entry}></Route>
				</Switch>
			</div>
    </div>
  );
};

export default index;