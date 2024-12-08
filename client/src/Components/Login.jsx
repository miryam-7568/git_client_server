import { useContext, useRef, useState } from "react"
import UserContext from "./UserContext"

const Login = ()=>{
    const name = useRef(null)
    const password = useRef(null) 
    const {Setuser} = useContext(UserContext) 
   return(
    <>
    <input ref={name} placeholder="user name"></input>
    <input ref={password} placeholder="password"></input>
    <button onClick={()=>{
        Setuser({name:name.current.value, password:password.current.value})
    }}>login</button>
    </>
   ) 
}
export default Login