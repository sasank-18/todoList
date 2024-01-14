import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const ListCom= (props)=> {
    
      const [line , setline]= useState("")

       const cutIt=()=>{
         setline(()=>{
            return "true";

         })
       }
  
    return (
        <>
             <div className='todo_style'>
        
           <li style={{textDecoration:line ? 'line-through': 'none'}} ><DeleteOutlineIcon onClick={cutIt} className='deleteicon'/> {props.text} </li>
           </div>
        </>
    )
    
   
}

export default ListCom; 