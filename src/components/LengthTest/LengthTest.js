import React from 'react';
// import styled from 'styled-components';
// import background from '../../views/wave-background.svg';
// import logo from '../../views/logo.svg';
import { SecondaryContainer, InvertedButton, CenterContainer, Paragraph, ParagraphMuted } from '../../styles/Styles';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const Test = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
        <motion.div 
          className="container py-5"
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          initial={{opacity: 0}}>
          <Paragraph>W ciągu 3 sekund należy wciągnąć nosem jak najwięcej powietrza, a następnie jak najdłużej wydmuchiwać je ustami.</Paragraph>
          <Paragraph>Gdy będzie Pan/i gotowy/a proszę nacisnąć przycisk "Rozpocznij".</Paragraph>
          <ParagraphMuted>Pojawi się dalsza instrukcja!</ParagraphMuted>
          <Link to="/StartTest">
            <InvertedButton>Rozpocznij</InvertedButton>
          </Link>
        </motion.div>

        <CenterContainer className="d-flex flex-column align-items-center">
        </CenterContainer>
      </SecondaryContainer>
    </div>
  )
};

export default Test;