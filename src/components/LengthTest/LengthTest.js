import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MainContainer, Button, Paragraph, ParagraphSmaller } from '../../styles/Styles';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const Test = () => {

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
    <Row className="mx-auto">
      <Col
        className="text-center my-5 mx-auto "
        xs={ 12 }
        md={ 12 }
        lg={ 12 }>
        
        <motion.div className="container mb-5"
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          initial={{opacity: 0}}>
          <Paragraph>Celem testu jest sprawdzenie jak długo potrafi Pan/i wydmuchiwać powietrze, po uprzednim maksymalnym wdechu.</Paragraph>
          <Paragraph>Aby przejść dalej proszę nacisnąć przycisk "Rozpocznij".</Paragraph>
          <ParagraphSmaller>Pojawi się dalsza instrukcja!</ParagraphSmaller>

          <Link to="/StartTest"> 
            <Button>Rozpocznij</Button>
          </Link>
        </motion.div>

      </Col>
    </Row>
  <Navbar></Navbar>
  </MainContainer>
  )};

export default Test;