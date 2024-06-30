import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Spinner from './components/Spinner'


// API KEY::::691e4ff22f7b4f5b8815ad7411d86bab
export default class App extends Component {
  render() {
    
    return (
      <div>
        <Navbar></Navbar>
        <News ></News>
      </div>
    )
  }
}


