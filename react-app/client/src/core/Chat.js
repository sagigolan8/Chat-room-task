import React,{useState, useEffect,useRef} from "react";
import '../styles/chat.css'
import User from "./User";
import { useLocation } from 'react-router'
import Messege from "./Messege";



export default function Chat(){
  const textareaEl = useRef(null)
  const [messeges, setMesseges] = useState(["welcome"])
  const [time, setTime] = useState([])
  const {search} = useLocation()
  const getParam = search.slice(9)
  let [users, setUsers] = useState(['sagi'])
 
  // const addUser = ()=>{
  //   // console.log('in addUser');
  //   // const tempArray = [...users]
  //   // if(getParam === '' && search.slice(0,9) !== '?addUser=' && users.includes(getParam)) 
  //   // return
  //   setUsers(users.concat(getParam))
  //   console.log(users);
  // }

  // useEffect(() => {
  //   addUser()
  // }, []);

  const addMessege = ()=>{
    // console.log("in addMessege");
    if(!textareaEl.current.value) return
    setMesseges(messeges.concat(textareaEl.current.value))
    textareaEl.current.value = ''
  }
  // useEffect(() => {
  //   // addMessege()

  // }, [messeges])
  return(
  <div className="container app">
    <div className="row app-one">
      <div className="col-sm-4 side">
        <div className="side-one">
          <div className="row heading">
            <div style={{ cursor: "default"}} className="col-sm-3 col-xs-3 heading-avatar">
              <span><b>Users</b></span>
            </div>
          </div>
  
           {/* <div className="row searchBox">
            <div className="col-sm-12 searchBox-inner">
              <div className="form-group has-feedback">
                <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search"/>
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>  */}
  
           {/* all users  */}
          <div className="row sideBar">

          {users.map((user)=>{
            return <User name={user} />
          })}


            {/* <User name="mimi"/> */}

             {/* className="row sideBar-body" === user */}
            {/* <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe
                  </span>
                  </div>
                </div>
              </div>
            </div> */}

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
                    <span className="name-meta">John Doe
                  </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  
      <div className="col-sm-8 conversation">
        <div className="row heading">
          <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
            <div style={{ cursor: 'default'}} className="heading-avatar-icon">
              <img  src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            </div>
          </div>
          <div className="col-sm-8 col-xs-7 heading-name">
            <span className="heading-name-meta">John Doe
            </span>
            <span className="heading-online">Online</span>
          </div>
        </div>
  
        <div className="row message" id="conversation">
            {messeges.map((msg)=>{
              return <Messege time={Date(Date.now())} msg={msg}/>
            })}
            
            {/* Messege */}
          {/* <div className="row message-body">
            <div className="col-sm-12 message-main-receiver">
              <div className="receiver">
                <div className="message-text" >
                 Hi, what are you doing?!
                </div>
                <span id="kuku" className="message-time pull-right">
                  
                </span>
              </div>
            </div>
          </div> */}

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
            <textarea ref={textareaEl} className="form-control" rows="1" id="comment" placeholder="Send messege to everyone"></textarea>
          </div>
           {/* send button  */}
          <div  className="col-sm-1 col-xs-1 reply-send">
            <i onClick={()=>addMessege()} id="sendIcon" className="fa fa-send fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}