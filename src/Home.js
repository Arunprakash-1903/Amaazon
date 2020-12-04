
import React, { useEffect, useState } from 'react'
import "./home.css"
import Product from "./Product"
import FlipMove from "react-flip-move"

import axios from './axios';


function Home() {
    const [allproducts,setallproducts]=useState([]);

    
    useEffect(async() => {
      const product= await axios({
          method:"get",
          url:"/"
      }).then((product)=>(
          
        
        setallproducts(product.data.products)))

 
    }, [])
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/phase3/mainbank/pc/Slice_9NP.jpg" alt="vffgsh"/>
            <div  className="home__container" >
                
              
              { allproducts?.map(item=>{ return  <Product key={item?.id} title={item?.title} rating={item?.rating}  cost={item?.cost} image={item?.image}
                   /> })} 
              
            
             

            </div>
        </div>
    )
}

export default Home
