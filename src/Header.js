import React from 'react'
import {useEffect} from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import "./Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link,useHistory } from 'react-router-dom';
import { useSetValue } from './stateProvider';
import { auth } from './firebase';
import MenuIcon from '@material-ui/icons/Menu';
import {useState} from "react"
import SideBar from "./SideBar"
import axios from './axios';

function Header() {
    const [{items}]=useSetValue();
    const [input,setinput]=useState("")
    useEffect(async() => {
        
        const title= await axios({
            method:"post",
            url:`searchTitle?title=${input}`
        }).then((title)=>{
         
     setitem(title.data);
    
        })
   
dispatch({
    type:"SEARCHED_ITEM",
    item:item,
    
   })
      }, [input])
    const history=useHistory();

   
  const [item,setitem]=useState([])
    const [open, setopen] = useState(false);
    console.log(item);
    const handleclick=()=>{
        setopen(!open);
    }
 
    const [{basket,user,name}]=useSetValue();
    const handleauth = () =>{
        if(user){
          auth.signOut();
        
        }
    }
    const [,dispatch]=useSetValue();
    return (
   < div>
   
   <SideBar s={open} ss={setopen}/>
    <div className="header">
   
               <div className="header__left">
                   
               <MenuIcon onClick={handleclick} />
              
        <Link to="/">
        
       <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
       </Link>
               </div>
                 
         <div className="header__search">
             <input onChange={e=>setinput(e.target.value)} className="header__searchInput" type="text" value={input}/>
                 
            
                 <SearchSharpIcon className="header__searchIcon"  onClick={() => {

 

 }} />

   
         </div>
         <div className="seacrchitem">
         {items.map((item)=>{
             return( <ul><li>{item.title}</li></ul>)
         })} </div>
         <div className="header__nav">
         
         <div id="one">
             <Link style={{textDecoration:"none"}} to= {!user && "/login"}>
         <div onClick={handleauth} className="header__options ">
             
   <span className="header__optionfirstline">
       Hello {user?name:"Guest"}
   </span>
   <span className="header__optionsecondline">
    {user ?"sign out":"sign in" }
   </span>
   
   
         </div>
         </Link>
         </div>
            
         <div id="two"> <div className="header__options" >
         <span className="header__optionfirstline">
       Retrun
   </span>
   <span className="header__optionsecondline">
       & Orders
   </span>
             </div>
             
             
             </div>
        <div id="three"> <div className="header__options " >
             <span className="header__optionfirstline">
       Try 
   </span>
   <span className="header__optionsecondline">
       Prime
   </span>
             </div>
   </div>
            
   
     
             
   <div id="four">
   <div className="header__optionbasketIcon">
   <Link to="/checkout">
       <div className="header__optionbasket">
           
       <ShoppingCartIcon />
     
       <span className="header__basketcount header__optionsecondline">
       {basket.length}
       </span>
       </div>
       
      </Link> 
   </div>
   </div>
   
   
   
             </div>
             
           </div></div>
       
    )
}

export default Header
