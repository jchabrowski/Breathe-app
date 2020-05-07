import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import { MainContainer, Button, Paragraph } from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import nose  from '../../assets/images/nose.svg';
import rightArrow from '../../assets/images/right-arrow.svg';
import leftArrow from '../../assets/images/left-arrow.svg';
import leftDownArrow from '../../assets/images/left-down-arrow.svg';
import rightDownArrow from '../../assets/images/right-down-arrow.svg';
import pause from '../../assets/images/pause.svg';

const Exercise = () => {

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 mx-auto"
          xs= { 6 }
          md={{span: 6, offset: 3}}
          lg={{span: 6, offset: 3}}>
            <motion.div className="container d-flex justify-content-center">
              <img src={nose} alt="nose"></img>
            </motion.div>
           
            <motion.div className="container py-2 d-flex justify-content-start px-0"
              animate={{x:[0, 10, 0],  y:[0, -10, 0]}}
              transition={{ duration:2, loop: 4}}
              initial={{opacity: 1}}
              >
              <img src={leftArrow} alt="left-arrow"></img>
            </motion.div>
            <motion.div
              animate={{opacity: [1, 0.4, 1]}}
              transition={{ease: "easeInOut", duration:2, loop: 4}}
            >
              <Paragraph>Wdech...</Paragraph>
            </motion.div>

            <motion.div className="container py-2 d-flex justify-content-end px-0"
              animate={{x:[0, -10, 0],  y:[0, -10, 0]}}
              transition={{ duration:2, loop: 4}}
              initial={{opacity: 1}}
              >
              <img src={rightArrow} alt="right-arrow"></img>
            </motion.div>

            <motion.div className="container py-2 d-flex justify-content-start px-0"
              animate={{x:[0, -10, 0],  y:[0, 10, 0]}}
              transition={{ duration:2, loop: 4}}
              initial={{opacity: 1}}
              >
              <img src={leftDownArrow} alt="left-down-arrow"></img>
            </motion.div>

            <motion.div className="container py-2 d-flex justify-content-end px-0"
              animate={{x:[0, 10, 0],  y:[0, 10, 0]}}
              transition={{ duration:2, loop: 4}}
              initial={{opacity: 1}}
              >
              <img src={rightDownArrow} alt="right-down-arrow"></img>
            </motion.div>

            <motion.div
              animate={{opacity: [1, 0.8, 1]}}
              transition={{ease: "easeInOut", duration:2, loop: 4}}
            >
              <img src={pause} alt="pause"></img>
            </motion.div>
            
            <motion.div className="container pt-3 d-flex justify-content-center">
              <Link to="/">
                <Button>Wróc do Menu</Button>
              </Link>
            </motion.div>
        </Col>
    </Row>
    <Navbar></Navbar>
  </MainContainer>
  )
};

export default Exercise;