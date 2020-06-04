import React from 'react';
import { motion } from 'framer-motion';
import leftDownArrow from '../../../assets/images/left-down-arrow.svg'
import { Paragraph } from '../../../styles/Styles';

const LeftDownArrowAnimation = () => {
  return (
    <React.Fragment>
      <motion.div className="container py-2 d-flex justify-content-start px-0"
      
        animate={{x:[0, -10, 0],  y:[0, 10, 0]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        initial={{opacity: 1}}
        >
        <img src={leftDownArrow} alt="left-down-arrow"></img>
      </motion.div>

      <motion.div
        animate={{opacity: [1, 0.4, 1]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        >
        <Paragraph>Wydech...</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default LeftDownArrowAnimation;