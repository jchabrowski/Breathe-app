import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Test from './LengthTest/LengthTest'
import Exercise from './Exercise/Exercise';
import Navbar from './Navbar/Navbar';
import {  BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/LengthTest" component={Test}/>
        <Route path="/Exercise" component={Exercise}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
