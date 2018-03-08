import React from 'react';

import './styles/index.css';

const Box = (props) => {
  return (
    <div className={`box-container animated fadeInUp ${props.className ? props.className : ''}`}>
			{props.children}
    </div>
  )
}

export default Box