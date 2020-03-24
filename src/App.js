import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Test from './components/LengthTest/LengthTest'
import Start from './components/LengthTest/StartTest'
import Exercise from './components/Exercise/Exercise';
import Info from './components/Info/Info';
import {  BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
  <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/LengthTest" component={Test}/>
        <Route path="/StartTest" component={Start}/>
        <Route path="/Exercise" component={Exercise}/>
        <Route path="/Info" component={Info}/>

        {/* <Switch>
            <Route exact path="/">
            </Route>
            <Route exact path="/LengthTest">
              <Test />
            </Route>

            <Route path="/Exercise">
              <Exercise />
            </Route>
          </Switch> */}
  </BrowserRouter>
  );
}

export default App;
