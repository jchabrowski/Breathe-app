import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import { MainContainer, Button } from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import nose  from '../../assets/images/nose.svg';
import LeftArrowAnimation from '../Animations/LeftArrowAnimation';
import RightArrowAnimation from '../Animations/RightArrowAnimation';
import LeftDownArrowAnimation from '../Animations/LeftDownArrowAnimation';
import RightDownArrowAnimation from '../Animations/RightDownArrowAnimation';
import PauseAnimation from '../Animations/PauseAnimation';




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
      console.log(i)
    }

    const animationInterval = setInterval(() => {
      i++
      breathingAnimation();
      if(i >= animationArray.length) {
        clearInterval(animationInterval);
      }
    }, 4000);
    // return () => clearInterval(animationInterval)
  }, [])

  

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

            {currentAnimation ? currentAnimation : null}
            
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