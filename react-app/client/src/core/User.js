import React from 'react'
import '../styles/user.css'

export default function User({user}) {
    return (
        <div style={{cursor: 'default'}} className="row sideBar-body">
        <div className="col-sm-3 col-xs-3 sideBar-avatar">
          <div className="avatar-icon">
            <i className="far fa-users"></i>
          </div>
        </div>
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">
            <div className="col-sm-8 col-xs-8 sideBar-name">
              <span className="name-meta"><b>{user}</b>
            </span>
            </div>
          </div>
        </div>
      </div>
    )
}