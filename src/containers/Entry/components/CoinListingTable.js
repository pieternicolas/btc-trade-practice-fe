import React from 'react';

import Box from './../../../components/Box';
import CoinListings from './../../../components/CoinListings';

const CoinListingTable = (props) => {
  return (
    <Box className="coin-listing-table mt-3">
    	<CoinListings coins={props.coins}></CoinListings>
    </Box>
  );
}

export default CoinListingTable;