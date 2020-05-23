import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph }  from '../../styles/Styles';

const ThankYouAnimation = () => {
  return (
    <React.Fragment>
      <motion.div className="container pt-2 justify-content-center px-0"
        animate={{opacity: [0.7, 0.4, 0.7]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        >
        <Paragraph>Ćwiczenia zakończone!</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default ThankYouAnimation;