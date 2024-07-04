import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import * as React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

// API KEY::::691e4ff22f7b4f5b8815ad7411d86bab
export default class App extends Component {
  render() {
    
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        {/* <News  country="in" category="sports"></News> */}
          <Routes>
            <Route exact path="/business" element={     <News key="business" country="in" category="business"></News>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"></News>}></Route>
            <Route exact path="/general" element={      <News key="general" country="in" category="general"></News>}></Route>
            <Route exact path="/health" element={       <News key="health" country="in" category="health"></News>}></Route>
            <Route exact path="/science" element={      <News key="science" country="in" category="science"></News>}></Route>
            <Route exact path="/sports" element={       <News key="sports" country="in" category="sports"></News>}></Route>
            <Route exact path="/technology" element={   <News key="technology" country="in" category="technology"></News>}></Route>
          </Routes>
        </Router>
        
            
        
      </div>
    )
  }
}


