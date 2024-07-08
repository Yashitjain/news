import React, { Component } from 'react'
import spinner from './spinner.gif'
const Spinner = ()=>{
    return (
      <div style={{marginBottom:"1rem"}}>
        <center>
          <img src={spinner} alt="spinner" style={{height:"3rem",width:"3rem"}}/>
        </center>
      </div>
    )
  }
export default Spinner
