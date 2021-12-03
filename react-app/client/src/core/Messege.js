import React from 'react'

export default function Messege({msg,time}) {
    return (
          <div className="row message-body">
            <div className="col-sm-12 message-main-receiver">
              <div className="receiver">
                <div className="message-text" >
                 {msg}
                </div>
                <span id="kuku" className="message-time pull-right">
                  {time.slice(0,24)}
                </span>
              </div>
            </div>
          </div> 
    )
}
