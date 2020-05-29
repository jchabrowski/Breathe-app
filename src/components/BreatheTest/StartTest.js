import React, { useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';
import { Button,  ParagraphSmaller, MainContainer } from '../../styles/Styles';
// import { Link } from 'react-router-dom';
import InhaleAnimation from '../Animations/TestAnimations/InhaleAnimation';
import ExhaleAnimation from '../Animations/TestAnimations/ExhaleAnimation';
import Circle from '../../assets/images/Circle.svg'
import Navbar from '../Navbar/Navbar';



export const StartTest = () => {

  const [currentAnimation, setAnimation] = useState();


  useEffect(() => {
    let currentAnimation= <InhaleAnimation/>
    setAnimation(currentAnimation)

    setTimeout(() => {
      let currentAnimation = <ExhaleAnimation/>
      setAnimation(currentAnimation)
    }, 3000)
  }, [])
  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 py-4 mx-auto"
          xs={ 12 }
          md={ 12 }
          lg={ 12 }>
            <motion.div className="container pt-5"
              initial={{width: "200px", height:"200px"}}
              animate={{
                scale: [1, 1.5, 0.5]
              }}
              transition={{ 
                duration: 30,
                times: [0, 0.1, 1],
                loop: 0
                }}
                >
              <img src={Circle} alt="Circle"/>
            </motion.div>

            {currentAnimation}
            
        </Col>
    </Row>
    <Navbar></Navbar>
  </MainContainer>
  )
};

export default StartTest;