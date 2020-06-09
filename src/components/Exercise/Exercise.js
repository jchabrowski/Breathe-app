import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import { MainContainer, Button } from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Timer from 'react-compound-timer';
import nose  from '../../assets/images/nose.svg';
import LeftArrowAnimation from '../Animations/ExerciseAnimations/LeftArrowAnimation';
import RightArrowAnimation from '../Animations/ExerciseAnimations/RightArrowAnimation';
import LeftDownArrowAnimation from '../Animations/ExerciseAnimations/LeftDownArrowAnimation';
import RightDownArrowAnimation from '../Animations/ExerciseAnimations/RightDownArrowAnimation';
import PauseAnimation from '../Animations/ExerciseAnimations/PauseAnimation';
import ThankYouAnimation from '../Animations/ExerciseAnimations/ThankYouAnimation';

const Exercise = () => {
  
  const [currentAnimation, setAnimation] = useState();

  useEffect(() => {
    let i = 0;
    let animationArray = [<LeftArrowAnimation/>, <PauseAnimation/>, <RightDownArrowAnimation/>, <RightArrowAnimation/>, <LeftDownArrowAnimation/>, <PauseAnimation/> ]
    let currentAnimation = animationArray[i]
    setAnimation(currentAnimation);

    const breathingAnimation = () => {
      let currentAnimation = animationArray[i];
      setAnimation(currentAnimation);
    }

    const animationInterval = setInterval(() => {
      i++
        if(i >= animationArray.length) {
          i = 0;
        }
      breathingAnimation();
    }, 4000);
    
    setTimeout(() => {
      clearInterval(animationInterval);
      let currentAnimation = <ThankYouAnimation />
      setAnimation(currentAnimation);
      console.log('animation cleared');
    }, 600000)
  }, []);

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 mx-auto"
          xs={ 6 }
          md={{span: 6, offset: 3}}
          lg={{span: 6, offset: 3}}>
            <motion.div className="container d-flex justify-content-center">
              <img src={nose} alt="nose"></img>
            </motion.div>
              {currentAnimation}
    
            <Timer  formatValue={(value) => `${(value < 10? `0${value}` : value)}`}
              initialTime={600000}
              direction="backward">
                {
                  <React.Fragment>
                    <Timer.Minutes />:
                    <Timer.Seconds />
                  </React.Fragment>
                }
            </Timer>

            <motion.div className="container pt-3 d-flex justify-content-center">
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

export default Exercise;