import React from 'react';
import { motion } from 'framer-motion';
import { SecondaryContainer, Button, BottomContainer, Paragraph, ParagraphSmaller } from '../../styles/Styles';
import Circle from '../../assets/images/Circle.svg'
import Navbar from '../Navbar/Navbar';



export const StartTest = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-10 col-lg-8 align-items-center text-center">
        <Navbar></Navbar>
          <div className="container py-3">
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
            <Paragraph>Następnie okrąg zacznie się zmniejszać. W tym czasie  jak najdłużej wydmuchiwać powietrze ustami. W momencie w którym skończy Pan/i wydech należy nacisnąć przycisk stop.</Paragraph>
            <ParagraphSmaller>Jeżeli poczuje się Pan/i słabo należy przerwać próbę.</ParagraphSmaller>
        </div>

        <BottomContainer className="container">
          <Button>Start!</Button>
        </BottomContainer>
      </SecondaryContainer>
    </div>
  )
};

export default StartTest;