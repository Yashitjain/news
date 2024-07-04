import React, { Component } from 'react'
import spinner from './spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div style={{marginBottom:"1rem"}}>
        <center>
          <img src={spinner} alt="spinner" style={{height:"3rem",width:"3rem"}}/>
        </center>
      </div>
    )
  }
}
