import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import BreatheTest from './components/BreatheTest/BreatheTest';
import InfoTest from './components/BreatheTest/InfoTest';
import StartTest from './components/BreatheTest/StartTest';
import Exercise from './components/Exercise/Exercise';
import Info from './components/Info/Info';
import { HashRouter, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';

function App() {
  return (
  <HashRouter>
    <AnimatePresence>
        <Route exact path="/" component={Home} key="home"/>
        <Route path="/BreatheTest" component={BreatheTest} key="breatheTest" />
        <Route path="/InfoTest" component={InfoTest} key="infoTest"/>
        <Route path="/Exercise" component={Exercise} key="exercise"/>    
        <Route path="/Info" component={Info} key="info"/>
        <Route path="/StartTest" component={StartTest}  key="startTest"/>
    </AnimatePresence>
  </HashRouter>
  );
}

export default App;
