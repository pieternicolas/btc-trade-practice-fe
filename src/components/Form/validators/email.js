import React from 'react';

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (input) => {
	const tester = regex.test(String(input.value).toLowerCase())

	if (!tester)
		return (<span className="text-danger">Field {input.name} is not an email</span>);
	
	return true; 
};