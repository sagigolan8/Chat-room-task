import React,{useState,useEffect} from 'react'
import '../styles/user.css'
import {niceAlert} from '../helpers/niceAlerts'
import { Switch } from '@mui/material';
import axios from 'axios'

export default function User({user,onClick,setCurrentUserId}) {
  const {username,status,_id} = user
  const [checkStatus, setCheckStatus] = useState(status) // true for online, false for offline

  const setStatusInDb = async(_id,status)=>{
    await axios.put('http://localhost:8080/setStatus',{
      _id,
      status
    })
  }

  const updateUserStatus = async ()=>{
    setCheckStatus(!checkStatus);
    await setStatusInDb(_id,!status);
    if(!checkStatus)
    niceAlert(`${username} is online`,'success');
    else
    niceAlert(`${username} is offline`,'error');
  } 


    return (
        <div onClick ={()=>onClick(user)} className="row sideBar-body">
        <div className="col-sm-3 col-xs-3 sideBar-avatar">
          <div className="avatar-icon">
            <i className="far fa-user"></i>
          </div>
        </div>
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">
            <div className="col-sm-8 col-xs-8 sideBar-name">
              <span className="name-meta">{username}
            </span>
            </div>

            {/* <label className="switch">
                    <input onClick={()=>updateUserStatus(username)} type="checkbox" id={username}/>
                    <div className="slider round">
                     <span className="on"></span>
                     <span className="off"></span>
                    </div>
                   </label> */}


              <Switch
              onClick={async() => await updateUserStatus() }
              checked={checkStatus}
              size="medium"
              alt="switch"
              color="success"
            />
          </div>
        </div>
      </div>
    )
}