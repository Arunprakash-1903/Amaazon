import React from 'react'
import "./home.css"
import Product from "./Product"
import { useSetValue } from './stateProvider';

function Searchedproduct() {
    const [{items}]=useSetValue();
    return (
        <div className="home">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/phase3/mainbank/pc/Slice_9NP.jpg" alt="vffgsh"/>
        <div  className="home__container" >
            
          
           { items &&items?.map(item=>{
               return  <Product key={item?.id} title={item?.title} rating={item?.rating}  cost={item?.cost} image={item?.image}
               /> 
           })}

           
        
         

        </div>
    </div>
    )
}

export default Searchedproduct
