import React from 'react';
import { motion } from 'framer-motion';
import { SecondaryContainer, InvertedButton, CenterContainer, Paragraph, ParagraphMuted } from '../../styles/Styles';
import Circle from '../../assets/images/Circle.svg'
import Navbar from '../Navbar/Navbar';



export const StartTest = () => {
  return (
    <div className="container-sm d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
          <div className="container py-3">
            <motion.div className="container pt-5"
              initial={{width: "200px", height:"200px"}}
              animate={{
                scale: [1, 1.7, 1]
              }}
              transition={{ 
                duration: 4, 
                loop: 2 }}
            >
              <img src={Circle} alt="Circle"/>
            </motion.div>
            <ParagraphMuted className="mt-4">Wdech...</ParagraphMuted>
        </div>

        <CenterContainer className="d-flex flex-column align-items-center">
          <InvertedButton>Start!</InvertedButton>
        </CenterContainer>
      </SecondaryContainer>
    </div>
  )
};

export default StartTest;