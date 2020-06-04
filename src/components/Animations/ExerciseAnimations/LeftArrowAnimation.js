import React from 'react';
import { motion } from 'framer-motion';
import leftArrow from '../../../assets/images/left-arrow.svg'
import { Paragraph }  from '../../../styles/Styles';

const LeftArrowAnimation = () => {
  return (
    <React.Fragment>
      <motion.div className="container py-2 d-flex justify-content-start px-0"
        
        animate={{x:[0, 10, 0],  y:[0, -10, 0]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        exit={{opacity: 0}}
        initial={{opacity: 1}}
        >
        <img src={leftArrow} alt="left-arrow"></img>
      </motion.div>

      <motion.div 
        animate={{opacity: [1, 0.4, 1]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        >
        <Paragraph>Wdech...</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default LeftArrowAnimation;