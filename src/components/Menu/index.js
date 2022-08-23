//import 'whatwg-fetch';
//import 'core-js/stable';

import React from "react";
import { Switch, Route, Link } from "react-router-dom";


import Home from 'components/Home/';
import ProductDetail from 'components/ProductDetail/';
import Error from 'components/Error/';


// Import of an asset usin alias in Webpack
import brandLogo from 'images/favicon.svg';

export default function BasicRouterExample() {
  return (
       
	   <div>
	   
		<nav className="navbar navbar-expand-lg navbar-light">
                    
            <Link to="/">
			   <img width="50px" src={brandLogo} alt="Webpack Logo" />
			</Link>
					
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
						
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	  	  
	            <div className="navbar-nav">
                       
					 {/*   <Link to="/" className="nav-item nav-link">Home</Link>
                       <Link to="/about" className="nav-item nav-link">About this App</Link> */}
                 
				 </div>
				
			   </div>
				
         </nav>
          
	    <br />
		 

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
		
        <Switch>
		
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/product/:id">
            <ProductDetail />
          </Route>
		  
		   {/* <Route path="/editpost/:id">
            <EditPost />
          </Route> */}

		  <Route path="*" component={Error} />
		  
        </Switch>
		
      </div>
   
  );
}


