import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar'

// API KEY::::691e4ff22f7b4f5b8815ad7411d86bab
export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY

  state = {
    progress:10,
    // apiKey:"691e4ff22f7b4f5b8815ad7411d86bab",

  }
  setProgress = (value)=>{
    this.setState({progress:value})
  }
  render() {
    
    return (
      <div>
        <Router>
          APIKEY={this.apiKey}
          {console.log("apikey=>",this.state.apiKey)}
          <Navbar></Navbar>

          {/* <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={this.setProgress(0)}
          /> */}

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


