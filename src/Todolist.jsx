// import React from 'react';
// import './index.css'

// const TodoLists= (props) =>{

     
// return(
//     <>
//         <div className='todo_style'>
        
//          <li> 
//          <i onClick={()=>{
//             props.onSelect(props.id) }}    
//         className='fa fa-times'/>

//          {props.text}</li>
//          </div>
//     </>
// )

// };


// export default TodoLists;

  ///todolist uisng material ui 

  import React, { useState } from 'react'
  import Button from '@mui/material/Button';
  import AddIcon from '@mui/icons-material/Add';
import { Height } from '@mui/icons-material';
import ListCom from './ListCom';
  

  const Todolist=()=>{

    const [item, setitem]= useState();
    const [newItem, setNewItem]= useState([]);  
    
    const itemEvent= (event)=>{
      setitem(event.target.value);
       
    }
    const clickButton=()=>{
        setNewItem((preValue)=>{
            return [...preValue, item]
        })
      setitem(" ")

      }

    

    return (
           <>
           <div className='main_div'>
           <div className='center_div'>
            <br/>
            <h1> Todolist</h1>
            <br/>
            <input type='text'
            onChange={itemEvent}
            placeholder='Add an item' 
            value={item}
            />
            <Button className='newBtn' onClick={clickButton}  >
                   <AddIcon/>
            </Button>
            <br/>
            <ol>
              
             { newItem.map((curvalue,index)=>{
               return <ListCom  key={index} text={curvalue}/>
              })}
            </ol>
           </div>
           </div>

           </>

    )

  }


export default Todolist;