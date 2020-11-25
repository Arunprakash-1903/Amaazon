
import React from 'react'
import "./home.css"
import Product from "./Product"
import FlipMove from "react-flip-move"

function Home() {
   
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/phase3/mainbank/pc/Slice_9NP.jpg" alt="vffgsh"/>
            <div  className="home__container" >
                
              
               
               
   
                    <Product key="4484878" title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)" rating={5}  cost={4} image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                     <Product key="64846" title="Samsung Galaxy M51 (Electric Blue, 8GB RAM, 128GB Storage)"rating={5}  cost={6666} image="https://m.media-amazon.com/images/I/710weRkP-nL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                    <Product key="1564544" title="Redmi 8A Dual (Sea Blue, 2GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery" rating={5}  cost={556}  image="https://m.media-amazon.com/images/I/71yXShgxvpL._AC_UY327_FMwebp_QL65_.jpg"
                     />  
                       
            
          
                <Product key="654654" title="Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)" rating={5}  cost={4566}image="https://m.media-amazon.com/images/I/91Lr-OxVKjL._AC_UL480_FMwebp_QL65_.jpg"
                 />
                <Product key="6454" title="New Apple iPhone 12 Mini (128GB) - Blue" rating={5} cost={1}  image="https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_UY327_FMwebp_QL65_.jpg"
                 />
                <Product key="645456" title="OPPO A5 2020 (Mirror Black, 3GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers " rating={5} cost={760} image="https://m.media-amazon.com/images/I/514zYTXaCqL._AC_UL480_FMwebp_QL65_.jpg"/>
                <Product key="645456" title=" " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"/>
                <Product key="645456" title="Incididunt dolore culpa et deserunt tempor proident " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"/>
                <Product key="645456" title="Incididunt dolore culpa et deserunt tempor proident " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"/>
                <Product key="645456" title="Incididunt dolore culpa et deserunt tempor proident " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"/>
                <Product key="645456" title="Incididunt dolore culpa et deserunt tempor proident " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"/>
                <Product key="645456" title="Incididunt dolore culpa et deserunt tempor proident " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"/>
                <Product key="645456" title="Incididunt dolore culpa et deserunt tempor proident " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"/>
               
            
             

            </div>
        </div>
    )
}

export default Home
