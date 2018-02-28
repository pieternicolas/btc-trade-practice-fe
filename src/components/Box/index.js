import React from 'react';

import './styles/index.css';

const index = (props) => {
  return (
    <div className="box-container animated fadeInUp">
			{props.children}
    </div>
  )
}

export default index