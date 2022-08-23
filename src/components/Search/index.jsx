import React, { useState , useEffect } from 'react';

function Search () { 
   const [searchValue, setSearchValue] = useState('')

   const handleChange = event => {
      setSearchValue(event.target.value);
      console.log('value is:', event.target.value);
    }

    const searchProduct = event => {
      setSearchValue(event.target.value);
      console.log('value is:', event.target.value);
    }

      return (
         <div>
               <div>
                  <form className="form-inline mb-5">
                              <input 
                                 className="form-control mr-sm-2" 
                                 type="search" 
                                 id="search"
                                 name="search"
                                 onChange={handleChange}
                                 value={searchValue} 
                                 placeholder="Search" 
                                 aria-label="Search" />
                              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={searchProduct}>Search</button>
                  </form>
               </div>
           


               
            			 

         </div>
      );
   }


export default Search;