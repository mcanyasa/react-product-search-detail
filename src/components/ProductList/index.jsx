import React, { useState , useEffect } from 'react';

import pListData from '../../data/Search.json'

function ProductList () { 

      const [productListData, setProductListData] = useState([])

      useEffect(() => {
         console.log("pListData",pListData)
         setProductListData(pListData)
       },[]);

      
      return (
         <div className="d-flex">
           
		       {/* <h2>{JSON.stringify(productListData)}</h2><br /> */}
                  <div  className="card-group">
                  { productListData.map((item, key) => {
                        return (
                           
                           <div key={key} style={{border: "1px solid #6c757d"}}  className="card mr-2 mb-4">
                             <img style={{height: 250 + "px"}} className="card-img-top" src={item.imgUrl} alt="Card image cap" />
                             <div className="card-body">
                               <h5 className="card-title">{item.name}</h5>
                               <p className="card-text">{item.prewText}</p>
                               <p className="card-text"><small className="text-muted">Last 3 piece(s)</small></p>
                             </div>
                           </div>
                        
                        )
                       
                    })
                  
                }
                </div>
            </div>
      );
   }


export default ProductList;