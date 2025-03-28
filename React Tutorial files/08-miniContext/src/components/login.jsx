import React, { useContext, useState } from 'react'
import contextProvider from '../context/userContext'




function Login() {


const [user,setUser] = useState("")
const [password, setPassword] = useState("")
const {setdata} = useContext(contextProvider)

const handleSubmit = (e) =>{
    e.preventDefaul()
    setdata({user,password})
}
  return (
    <>
    <div style={ {textAlign: "center", marginTop: "50px" }}>
        <h2>LOGIN</h2>
          <h4>username</h4>
        <input 
        type = "username"
        value = {user}
        placeholder='enter your username'
        onChange={(e)=> setUser(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}>
        </input>
          <h4>Password</h4>
        <input 
        type = "password"
        value = {password}
        placeholder='enter your password'
        onChange={(e)=> setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
         ></input>
         <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default Login