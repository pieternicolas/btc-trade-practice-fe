import React from 'react';

import './styles/index.css';


const Loader = (props) => {
  return (
    <div className={`loader-container ${props.isActive ? 'active' : ''}`}>
			
			<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

		</div>
  )
};

export default Loader;