import React from 'react';

import Header from './../../components/Header';
import Sidebar from './../../components/Sidebar';

const index = (props) => {
  return (
    <div className="h-100 w-100">
    	<Header></Header>

    	<Sidebar></Sidebar>
    </div>
  );
};

export default index;