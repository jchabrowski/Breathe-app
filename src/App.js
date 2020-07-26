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
        <Route exact path="/" component={Home} key="Home"/>
        <Route path="/BreatheTest" component={BreatheTest}  key="BreatheTest"/>
        <Route path="/InfoTest" component={InfoTest}  key="InfoTest"/>
        <Route path="/Exercise" component={Exercise} key="Exercise"/>    
        <Route path="/Info" component={Info} key="Info"/>
        <Route path="/StartTest" component={StartTest} key="StartTest"/>
    </AnimatePresence>
  </HashRouter>
  );
}

export default App;
