import React,{useState,useRef} from "react";
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import {niceAlert} from '../helpers/niceAlerts'
import axios from 'axios'

export default function Login(){
    const navigate = useNavigate()
    const inputEl = useRef(null)

    const addUserToDb = async(username)=>{
        const {data} = await axios.post(`http://localhost:8080/create/${username}`)
        console.log(data);
    }

    const sendUser = async() => {
        const username = inputEl.current.value
        if(!username || !(/^[a-zA-Z]+$/.test(username.replace(/ +/g, "")))){//validate username
        niceAlert('type only letters please ','error')    
        return
        }
        navigate('/chat');
        niceAlert(`Welcome ${username}`,'success')
        await addUserToDb(username)
      }

    return(
            <div>
                <input ref={inputEl} name="sendUser" placeholder="Type username" />
                <button onClick={()=>sendUser()} className="btn btn-primary">Login</button>
            </div>
    )
}