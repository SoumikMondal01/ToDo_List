import React, { useState } from "react";
import "./App.css";

function App() {
    const [name, setName]= useState({
        fname: '',
        lname: '',
        email: '',
        phone : '',
    });

    const inputEvent = (event)=>{
        const {value, name} = event.target;
    
    setName((prevValue)=>{
        if(name== 'fname'){
            return{
                fname : value,
                lname : prevValue.lname,
                email: prevValue.email,
                phone: prevValue.phone,
            }
        }
        else if(name=='lname'){
            return{
                fname : prevValue.fname,
                lname : value,
            }
        }
        else if(name=='email'){
            return{
                fname: prevValue.fname,
                lname: prevValue.lname,
                email: value,
                phone: prevValue.phone,
            }
        }
        else{
            return {
                fname: prevValue.fname,
                lname: prevValue.lname,
                email: prevValue.email,
                phone: value,
            }
        }
    });
    }
    
  return (
    <>
    <div className="App">
    <form onSubmit={(event)=>{event.preventDefault()}}>
    <h1>Hello {name.fname} {name.lname}</h1>
    <h2>{name.email}</h2>
    <h3>{name.phone}</h3>
    <input type="text" name="fname" placeholder="First name" onChange={inputEvent}/><br/><br/>
    <input type="text" name="lname" placeholder="Last name" onChange={inputEvent}/><br/><br/>
    <input type="email" name="email" placeholder="Email" autoComplete="off" onChange={inputEvent}/><br/><br/>
    <input type="text" name="phone" placeholder="Phone Number" onChange={inputEvent}/><br/><br/>

    <button className="btn" > Click Me 🙂</button>
    </form>
    </div>
    </>
  );
}

export default App;
