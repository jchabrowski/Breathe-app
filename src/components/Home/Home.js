import React from 'react';
// import styled from 'styled-components';
// import background from '../../views/wave-background.svg';
import logo from '../../assets/images/logo.svg'
// import Test from '../LengthTest/LengthTest';
// import Exercise from '../Exercise/Exercise';
import { Container, BoxLogo, Buttons, Button } from '../../styles/Styles';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <Container className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <BoxLogo>
          <img src={logo} alt="logo"></img>
        </BoxLogo>

        <Buttons className="d-flex flex-column align-items-center">
          <Link to="/LengthTest">
            <Button>Rozpocznij test</Button>
          </Link>

          <Link to="/Exercise">
            <Button>Twoje ćwiczenia</Button>
          </Link>
          
          <Link to ="/Info">
            <Button>Informacje</Button>
          </Link>
        </Buttons> 
      </Container>
    </div>
  )
};

export default Home;