import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component { 
  render() {
    return (
      <div style={{marginBottom:"16px",position:"sticky",top:"0px",zIndex:"2"}} >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Hot News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                    <Link className="nav-Link" to="/business">business </Link>
                    </li>
                    <li className="nav-item mx-2">
                    <Link className="nav-Link" to="/entertainment">entertainment </Link>
                    </li> 
                    <li className="nav-item mx-2">
                    <Link className="nav-Link" to="/general">general </Link>
                    </li>
                    <li className="nav-item mx-2">
                    <Link className="nav-Link" to="/health">health </Link>
                    </li>
                    <li className="nav-item mx-2">
                    <Link className="nav-Link" to="/science">science </Link>
                    </li>
                    <li className="nav-item mx-2">
                    <Link className="nav-Link" to="/sports">sports </Link>
                    </li>
                    <li className="nav-item mx-2">
                    <Link className="nav-Link" to="/technology">technology </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
