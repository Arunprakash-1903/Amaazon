import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSetValue } from './stateProvider';
import { auth } from './firebase';
import ListAltIcon from '@material-ui/icons/ListAlt';
import "./SideBar.css"
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
function SideBar({s, ss}) {
    const [{user}]=useSetValue();
    const handleauth = () =>{
        if(user){
          auth.signOut();
        }
    }
    console.log(s);
    return (
    
           <div className={s ?"sidebar active" : "sidebar"}>
               <div onClick={s => ss(!s)} className="sidebar__close">
                    <CloseIcon />
                    </div>
             
               <Link style={{textDecoration:"none"}} to="/login">
               <div  className="sidebar__items" onClick={handleauth}>
               <AccountCircleIcon />
               <h4>{user?"Sign Out":"Sign In"}</h4>
               </div></Link>
               <Link style={{textDecoration:"none"}} to="/orders"> 
                <div className="sidebar__items">
               <ListAltIcon />
             <h4>Orders & Returns </h4>

               </div>
               </Link>
             
        </div>
    )
}

export default SideBar
