import React, { useRef } from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom';
import {niceAlert} from '../helpers/niceAlerts'

export default function Login({ setUser }) {
    const inputEl = useRef(null)
    const nav = useNavigate()
    const sendUser = async () => {
        const username = inputEl.current.value
        if (!username) {//validate username
            niceAlert('type only letters please','error')
            return
        }
        setUser(username)
        nav('/chat', { replace: true })
        niceAlert(`Welcome ${username}`,'success')
    }

    return (
        <div className="form-bg">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                    <div className="form-container">
                        <form className="form-horizontal">
                            <h3 className="title">Login Chat Room</h3>
                            <div className="form-group">
                              <span className="input-icon"><i style={{border:'none'}} className="fa fa-user"></i></span>
                              <input ref={inputEl} className="form-control" placeholder=" Type Username"/>
                            </div>
                            <div style={{textAlign:'center'}}>
                            <button onClick={() => sendUser()} className="btn signin">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}