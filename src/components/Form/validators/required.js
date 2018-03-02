import React from 'react';

export default (input) => {
	if (!input.value.trim().length)
		return (<span className="text-danger">Field {input.name} is required</span>);
	
	return true; 
};