import React from 'react'
import { useSetValue } from './stateProvider';

function Searchitem() {
    const [{items}]=useSetValue();
    return (
        <div className="seacrchitem">
         {items.map((item)=>{
             return( <ul><li>{item.title}</li></ul>)
         })} 
        </div>
    )
}

export default Searchitem
