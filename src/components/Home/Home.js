import React from 'react';
// import styled from 'styled-components';
// import background from '../../views/wave-background.svg';
import logo from '../../views/logo.svg';
import Test from '../LengthTest/LengthTest';
import Exercise from '../Exercise/Exercise';
import { Container, BoxLogo, Buttons, Button } from '../../styles/Styles';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <BrowserRouter>
      <Container className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <BoxLogo>
          <img src={logo} alt="logo"></img>
        </BoxLogo>

        <Buttons className="d-flex flex-column align-items-center">
          <Link to="/LengthTest">Rozpocznij test</Link>
          <Link to="/Exercise">Twoje ćwiczenia</Link>
          <Button>Informacje</Button>

          <Switch>
            <Route exact path="/">
              <p>Test</p>
            </Route>
            <Route path="/LengthTest">
              <Test />
            </Route>

            <Route path="/Exercise">
              <Exercise />
            </Route>
          </Switch>
        </Buttons> 
      </Container>
      </BrowserRouter>
    </div>
  )
};

export default Home;