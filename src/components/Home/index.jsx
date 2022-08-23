import React, { useState } from 'react';

import Search from 'components/Search/';
import ProductList from 'components/ProductList/';



class Home extends React.Component { 
   render() {

      return (
         <div>
           
		   <Search />
         <ProductList />
		   
		   <br />

         </div>
      );
   }
}

export default Home;