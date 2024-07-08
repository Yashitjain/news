import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";


const App = ()=> {
  const apiKey=process.env.REACT_APP_API_KEY

  const [progress,setProgressState] = useState(10);
  function setProgress(value) {
    setProgressState(value)
  }
    
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/business" element={     <News apiKey={apiKey} progress = {setProgress} key="business" country="in" category="business"></News>}></Route>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} progress = {setProgress} key="entertainment" country="in" category="entertainment"></News>}></Route>
            <Route exact path="/general" element={      <News apiKey={apiKey} progress = {setProgress} key="general" country="in" category="general"></News>}></Route>
            <Route exact path="/health" element={       <News apiKey={apiKey} progress = {setProgress} key="health" country="in" category="health"></News>}></Route>
            <Route exact path="/science" element={      <News apiKey={apiKey} progress = {setProgress} key="science" country="in" category="science"></News>}></Route>
            <Route exact path="/sports" element={       <News apiKey={apiKey} progress = {setProgress} key="sports" country="in" category="sports"></News>}></Route>
            <Route exact path="/technology" element={   <News apiKey={apiKey} progress = {setProgress} key="technology" country="in" category="technology"></News>}></Route>
            <Route exact path="/*" element={            <News apiKey={apiKey} progress = {setProgress} key="general" country="in" category="general"></News>}></Route>

          </Routes>
        </Router>
      </div>
    )
}

export default App;

