// import React, { useState } from 'react';
// import TodoLists from './Todolist';

// const App = () => {

//     const[inputList, setinputList]=  useState();
//     const[items, setitems]= useState([]);

//     const itemEvent= (e)=>{

//      setinputList(e.target.value);
        


//     }
//     //onClick
//     const listOfItem= () =>{
//          setitems((oldItems)=>{
//             return[
//              ...oldItems,  inputList];
              
//          });
//         setinputList('')
//     }

//     //deleteItem

//      const  deleteItem= (id)=>{
//         //  alert('helo')
         
//      setitems((oldItems)=>{
//         return oldItems.filter((arrElement, index)=>{
//             return index !== id;
//         });
//      });
//     };


//     return (
//         <>
//             <div className='main_div'>
//                 <div className='center_div'>
//                     <h1> ToDo List </h1>
//                     <input 
//                     type="text"
//                     placeholder='Add a Items'
//                     name='list'
//                     onChange={itemEvent}
//                     value={inputList}
//                     />
//                     <button onClick={listOfItem}>+</button>
//                     <ol>
//                         {/* <li> {inputList}</li> */}

//                       { items.map((itemval , index)=>{
//                           return <TodoLists 
//                              key={index} 
//                              id={index}
//                              text= {itemval}
//                              onSelect= {deleteItem} />
                             
//                        })}

            
//                     </ol>
//                 </div>
//             </div>
//         </>
//     )


// }


// export default App;