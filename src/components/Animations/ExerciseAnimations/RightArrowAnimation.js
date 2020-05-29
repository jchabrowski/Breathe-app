import React from 'react';
import { motion } from 'framer-motion';
import rightArrow from '../../../assets/images/right-arrow.svg'
import { Paragraph } from '../../../styles/Styles';


const RightArrowAnimation = () => {
  return (
    <React.Fragment>
      <motion.div className="container py-2 d-flex justify-content-end px-0"
        animate={{x:[0, -10, 0],  y:[0, -10, 0]}}
        transition={{ duration:2, loop: 4}}
        initial={{opacity: 1}}
        key={rightArrow}
        >
        <img src={rightArrow} alt="left-arrow"></img>
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

export default RightArrowAnimation;