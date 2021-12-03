import React from 'react'
import '../styles/user.css'


export default function User({name}) {
  console.log(name);
    return (
        <div className="row sideBar-body">
        <div className="col-sm-3 col-xs-3 sideBar-avatar">
          <div className="avatar-icon">
            <i className="far fa-user"></i>
          </div>
        </div>
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">
            <div className="col-sm-8 col-xs-8 sideBar-name">
              <span className="name-meta">{name}
            </span>
            </div>
          </div>
        </div>
      </div>
    )
}
