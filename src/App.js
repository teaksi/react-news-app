import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="in" category='general' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} country="in" category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category='entertainment' />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="in" category='general' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} country="in" category='health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} country="in" category='science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category='technology' />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
