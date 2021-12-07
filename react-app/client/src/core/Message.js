import React from 'react'

export default function Message({username,time,message}) {
    return (
          <div className="row message-body">
            <div className="col-sm-12 message-main-receiver">
              <div className="receiver">
              <div id="title">
                  <h5 style={{textDecoration:'underline',fontFamily:'monospace'}}>{username}</h5>
                </div>
                <div className="message-text" >
                 {message}
                </div>
                <span id="kuku" className="message-time pull-right">
                  {time}
                </span>
              </div>
            </div>
          </div> 
    )
}
