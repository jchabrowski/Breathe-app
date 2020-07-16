import React, { useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import { MainContainer } from '../../styles/Styles';
import CircleAnimation from '../Animations/TestAnimations/CircleAnimation';
import BreatheAnimation from '../Animations/TestAnimations/BreatheAnimation';
import Navbar from '../Navbar/Navbar';
import CircleContext from '../Animations/TestAnimations/CircleContext';

export const StartTest = () => {
  const [circle, setCircle] = useState(true);
  const value = {circle, setCircle};

  return (
    <CircleContext.Provider value={value}>
      <MainContainer className="d-flex min-vh-100 flex-column px-0">
        <Row className="mx-auto pt-5 mt-4">
          <Col
            className="text-center mt-5 pt-4 mx-auto"
            xs={ 12 }
            md={ 12 }
            lg={{span: 12, offset: 3 }}>
              {circle?
                <CircleAnimation />
                : null }
              <BreatheAnimation />
            </Col>
          </Row>
      <Navbar></Navbar>
    </MainContainer>
  </CircleContext.Provider>
  )
};

export default StartTest;