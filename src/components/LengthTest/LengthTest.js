import React from 'react';
// import styled from 'styled-components';
// import background from '../../views/wave-background.svg';
// import logo from '../../views/logo.svg';
import { SecondaryContainer, Button, BottomContainer, Paragraph, ParagraphSmaller } from '../../styles/Styles';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const Test = () => {

  return (
    <div className="container d-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="d-flex flex-column col-sm-12 col-md-10 col-lg-8 justify-content-center align-items-center text-center">
        <Navbar></Navbar>
        <motion.div className="container mb-5"
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          initial={{opacity: 0}}>
          <Paragraph>Celem testu jest sprawdzenie jak długo potrafi Pan/i wydmuchiwać powietrze, po uprzednim maksymalnym wdechu.</Paragraph>
          <Paragraph>Aby przejść dalej proszę nacisnąć przycisk "Rozpocznij".</Paragraph>
          <ParagraphSmaller>Pojawi się dalsza instrukcja!</ParagraphSmaller>
        </motion.div>

        <BottomContainer className="container flex-grow-1">
          <Link to="/StartTest"> 
            <Button>Rozpocznij</Button>
          </Link>
        </BottomContainer>
      </SecondaryContainer>
    </div>
  )
};

export default Test;