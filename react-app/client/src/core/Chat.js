import React,{useState, useEffect,useRef} from "react";
import '../styles/chat.css'
import User from "./User";
import Message from "./Message";
import axios from 'axios'


export default function Chat({user}){
  const textAreaEl = useRef(null)
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    const source = new EventSource(`http://localhost:8080/fetchData/${user}`);
    source.onmessage = function (event) {
        const { MESSAGES, USERS } = JSON.parse(event.data)
        setMessages(MESSAGES)
        setUsers(USERS)
    }
        }, [])
const sendMessage = async () => {
  const message = textAreaEl.current.value
  if (message)
      await axios.post('http://localhost:8080/addMessage', { message, username: user })
      textAreaEl.current.value = ''
}

  return(
  <div>
    <span className="chat-headline"><h1><strong>Chat Room</strong></h1></span>
    <div className="container app">
      <div className="row app-one">
        <div className="col-sm-4 side">
          <div className="side-one">
            <div className="row heading">
              <div style={{ cursor: "default"}} className="col-sm-3 col-xs-3 heading-avatar">
                <span><b>Users</b></span>
              </div>
            </div>
      
             {/* all users  */}
            <div className="row sideBar">
    
            
            {users.map((user)=>{
              return <User 
              key={user.username} 
               user={user} 
               />
            })}
    
            </div>
          </div>
    
          <div className="side-two">
            <div className="row newMessage-heading">
              <div className="row newMessage-main">
                <div className="col-sm-2 col-xs-2 newMessage-back">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="col-sm-10 col-xs-10 newMessage-title">
                  New Chat
                </div>
              </div>
            </div>
    
            <div className="row composeBox">
              <div className="col-sm-12 composeBox-inner">
                <div className="form-group has-feedback">
                  <input id="composeText" type="text" className="form-control" name="searchText" placeholder="Search People"/>
                  <span className="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
              </div>
            </div>
            
            {/* messeges area */}
            <div className="row compose-sideBar">
              <div className="row sideBar-body">
                <div className="col-sm-3 col-xs-3 sideBar-avatar">
                  <div className="avatar-icon">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                  </div>
                </div>
                <div className="col-sm-9 col-xs-9 sideBar-main">
                  <div className="row">
                    <div className="col-sm-8 col-xs-8 sideBar-name">
                      <span className="name-meta">
                    </span>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    
        {/* change user */}
    
        <div className="col-sm-8 conversation">
          <div className="row heading">
            <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
              <div style={{ cursor: 'default'}} className="heading-avatar-icon">
              </div>
            </div>
            <div className="col-sm-8 col-xs-7 heading-name">
              <span className="heading-name-meta">
              </span>
              <span className="heading-online"></span>
            </div>
          </div>
    
          <div className="row message" id="conversation">
              {messages.map((message)=>{
                return <Message 
                key={message}
                 time={message.time}
                  message={message.message}
                  username={message.username}
                  />
              })}
              
              {/* Messege */}
    
            <div className="row message-body">
              <div className="col-sm-12 message-main-receiver">
                <div className="receiver">
                  <div className="message-text" id="newMessege">
                   
                  </div>
                  <span className="message-time pull-right">
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
    
          <div className="row reply">
             {/* textearea  */}
            <div className="col-sm-9 col-xs-9 reply-main">
              <textarea ref={textAreaEl} className="form-control" rows="1" id="comment" placeholder="Send messege to everyone"></textarea>
            </div>
             {/* send button  */}
            <div  className="col-sm-1 col-xs-1 reply-send">
              <i onClick={()=>sendMessage()} id="sendIcon" className="fa fa-send fa-2x" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}