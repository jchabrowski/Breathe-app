import React from 'react';
import { SecondaryContainer, InvertedButton, CenterContainer, Paragraph } from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const Exercise = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
        <motion.div 
          className="container py-5"
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          initial={{opacity: 0}}>

          <Paragraph>PLACEHOLDER</Paragraph>
          <Link to="/">
            <InvertedButton>Wróc do Menu</InvertedButton>
          </Link>
        </motion.div>

        <CenterContainer className="d-flex flex-column align-items-center py-0">
          
        </CenterContainer>
      </SecondaryContainer>
    </div>
  )
};

export default Exercise;