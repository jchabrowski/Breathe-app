import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import LengthTest from './components/LengthTest/LengthTest'
import StartTest from './components/LengthTest/StartTest'
import Exercise from './components/Exercise/Exercise';
import Info from './components/Info/Info';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';

function App() {
  return (
  <BrowserRouter>
    <AnimatePresence>
      
        <Route exact path="/" component={Home}/>
        <Route path="/LengthTest" component={LengthTest}/>
        <Route path="/StartTest" component={StartTest}/>
        <Route path="/Exercise" component={Exercise}/>    
        <Route path="/Info" component={Info}/>
      
    </AnimatePresence>
  </BrowserRouter>
  );
}

export default App;
