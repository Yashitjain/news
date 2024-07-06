import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";


export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY

  state = {
    progress:10,

  }
  setProgress = (value)=>{
    this.setState({progress:value})
  }
  render() {
    
    return (
      <div>
        <Router>
          {console.log("apikey=>",this.state.apiKey)}
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/business" element={     <News apiKey={this.apiKey} progress = {this.setProgress} key="business" country="in" category="business"></News>}></Route>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} progress = {this.setProgress} key="entertainment" country="in" category="entertainment"></News>}></Route>
            <Route exact path="/general" element={      <News apiKey={this.apiKey} progress = {this.setProgress} key="general" country="in" category="general"></News>}></Route>
            <Route exact path="/health" element={       <News apiKey={this.apiKey} progress = {this.setProgress} key="health" country="in" category="health"></News>}></Route>
            <Route exact path="/science" element={      <News apiKey={this.apiKey} progress = {this.setProgress} key="science" country="in" category="science"></News>}></Route>
            <Route exact path="/sports" element={       <News apiKey={this.apiKey} progress = {this.setProgress} key="sports" country="in" category="sports"></News>}></Route>
            <Route exact path="/technology" element={   <News apiKey={this.apiKey} progress = {this.setProgress} key="technology" country="in" category="technology"></News>}></Route>
          </Routes>
        </Router>
        
            
        
      </div>
    )
  }
}


