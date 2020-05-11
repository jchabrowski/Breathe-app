import React from 'react';
import { motion } from 'framer-motion';
import pause from '../../assets/images/pause.svg';
import { Paragraph } from '../../styles/Styles';

const PauseAnimation = () => {
  return (
  <React.Fragment>
    <motion.div
      animate={{opacity: [1, 0.8, 1]}}
      transition={{ease: "easeInOut", duration:2, loop: 4}}
      >
      <img src={pause} alt="pause"></img>
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

export default PauseAnimation;