import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';
import { Button,  Paragraph, ParagraphSmaller, MainContainer } from '../../styles/Styles';
import Circle from '../../assets/images/Circle.svg'
import Navbar from '../Navbar/Navbar';



export const StartTest = () => {
  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 py-4 mx-auto"
          xs= { 12 }
          md={ 12 }
          lg={ 12 }>
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
            <Paragraph>W ciągu 3 sekund, podczas gdy okrąg będzie rósł, należy wciągnąć nosem jak najwięcej powietrza. </Paragraph>
            <Paragraph>Następnie okrąg zacznie się zmniejszać. W tym czasie proszę postarać się jak najdłużej wydmuchiwać powietrze ustami. W momencie w którym skończy Pan/i wydech należy nacisnąć przycisk stop.</Paragraph>
            <ParagraphSmaller>Jeżeli poczuje się Pan/i słabo należy przerwać próbę.</ParagraphSmaller>
            <Button className="mb-5">Start!</Button>
        </Col>
    </Row>
    <Navbar></Navbar>
  </MainContainer>
  )
};

export default StartTest;