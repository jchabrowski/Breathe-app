import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import { MainContainer, Button, Paragraph } from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import nose  from '../../assets/images/nose.svg';
import rightArrow from '../../assets/images/right-arrow.svg'
import leftArrow from '../../assets/images/left-arrow.svg'

const Exercise = () => {

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 mx-auto"
          xs= { 12 }
          md={{span: 6, offset: 3}}
          lg={{span: 6, offset: 3}}>
            <motion.div className="container d-flex justify-content-center">
              <img src={nose} alt="logo"></img>
            </motion.div>
            <motion.div className="container py-2 d-flex justify-content-around px-0">
              <img src={leftArrow} alt="left-arrow"></img> <img src={rightArrow} alt="right-arrow"></img>
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