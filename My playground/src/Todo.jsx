import React, { useState } from "react";
import './Todo.css'

const Todo = () =>{
    const [item, setItem] = useState('');
    const [addItem, setAddItem] = useState([]);

    const onSubmits=()=>{
        setAddItem((prevItems)=>{
            return [...prevItems, item];
        })
        setItem('');
    }
     const removeElement=(index)=>{
        setAddItem((prevItems)=>{
            prevItems.splice(index, 1);
            return [...prevItems];
        })
    }
    return(
        <>
        <div className="main_div">
            <div className="centre_div">
                <h1>ToDo List</h1> <br />
                <input type="text" placeholder="Add a item" value={item} onChange={(e)=>setItem(e.target.value)}/>
                <button className="add" onClick={onSubmits}>+</button>
                <ol>
                    {addItem.map((val, index)=>{
                    return(
                        <div className="todo_list">
                            <li key={index}>{val}</li>
                            <button onClick={()=>removeElement(index)} className="delete"></button>
                        </div>
                    ) 
                    })}

                </ol>
            </div>
        </div>
         
        </>
    )
}
export default Todo;

