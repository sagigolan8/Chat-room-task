import React,{useState} from "react";
import '../styles/login.css'

export default function Login(){

    const [users,Setusers] = useState([
        {name:'hello'}
    ])
    return(
            <form method="GET" action="chat" className="login-form"> 
                <input name="addUser" placeholder="Type username" />
                <button className="btn btn-primary">Login</button>
            </form>
    )
}