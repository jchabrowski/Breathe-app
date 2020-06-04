import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MainContainer, Button, Paragraph} from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import smiley from '../../assets/images/smiley.svg';
const Info = () => {

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 py-4 mx-auto "
          xs={ 12 }
          md={ 12 }
          lg={ 12 }>
            <motion.div className="container pt-5">
            <Paragraph>Aplikacja "oddech" bazuje na podstawowej technice jogi - Pranajama. Protokół oddechowy nie wymaga specjalistycznego sprzętu, może być wykonywany przez szerokie grono seniorów.</Paragraph>
            <Paragraph>Ćwiczenia należy wykonywać dwukrotnie w ciągu dnia. Wykonanie pojedynczej jednostki treningowej zajmuje 10 minut.</Paragraph>
            <Paragraph>Powodzenia <img src={smiley} alt="smiley"></img> </Paragraph>
            <Link to="/">
              <Button className="mb-5">Wróć do Menu</Button>
            </Link>
            </motion.div>
        </Col>
    </Row>
    <Navbar></Navbar>
  </MainContainer>
  )
};

export default Info;


