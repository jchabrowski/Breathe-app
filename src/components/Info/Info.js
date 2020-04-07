import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MainContainer, Button, Paragraph} from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
const Info = () => {

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 mx-auto "
          xs= { 12 }
          md={ 12 }
          lg={ 12 }>
            <motion.div className="container pt-5">
            <Paragraph>Aplikacja "oddech" wykorzystuje uzyskany w teście czas wydechu i na jego podstawie ustala długość ćwiczeń, dobranych do Pana/i możliwości.</Paragraph>
            <Paragraph>Aby ćwiczenia były skuteczne powinny być wykonywane codziennie, w ilości 3 serii.</Paragraph>
            <Link to="/">
              <Button>Wróć do Menu</Button>
            </Link>
            </motion.div>
        </Col>
    </Row>
    <Navbar></Navbar>
  </MainContainer>
  )
};

export default Info;


