import React from 'react';
// import styled from 'styled-components';
// import background from '../../views/wave-background.svg';
import logo from '../../assets/images/logo.svg'
// import Test from '../LengthTest/LengthTest';
// import Exercise from '../Exercise/Exercise';
import { Container, BoxLogo, Buttons, Button, Filler } from '../../styles/Styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Home = () => {

  return (
    <div className="container d-flex justify-content-center px-0">
      <Container className="container d-flex flex-column col-sm-12 col-md-10 col-lg-8 align-items-center flex-grow-1 justify-content-around text-center">
        <Filler></Filler>
        <motion.div className=""
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          initial={{opacity: 0}}>
          <BoxLogo>
            <img src={logo} alt="logo"></img>
          </BoxLogo>
        </motion.div>
        <Filler></Filler>

        <Buttons className="container d-flex flex-column justify-content-center align-items-center">
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