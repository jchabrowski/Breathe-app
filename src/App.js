import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Test from './components/LengthTest/LengthTest'
import Exercise from './components/Exercise/Exercise';
import {  BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
  <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/LengthTest" component={Test}/>
        <Route path="/Exercise" component={Exercise}/>
  </BrowserRouter>
  );
}

export default App;
