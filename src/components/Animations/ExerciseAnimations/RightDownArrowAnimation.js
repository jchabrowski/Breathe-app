import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph } from '../../../styles/Styles';

const RightDownArrowImage = () => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M25.7 14.1262C25.7081 13.6557 25.3233 13.2709 24.8447 13.2709C24.3823 13.2709 23.9975 13.6557 23.9981 14.1175L23.9981 22.7909L9.68761 8.48044C9.35348 8.14739 8.82318 8.14739 8.48959 8.48098C8.156 8.81457 8.14738 9.35349 8.48097 9.68708L22.7914 23.9975L14.1261 23.9895C13.6557 23.9975 13.2703 24.3829 13.2709 24.8447C13.2709 25.3233 13.6562 25.7086 14.1261 25.7L24.8528 25.7C25.3233 25.7081 25.7081 25.3233 25.6994 24.8533L25.7 14.1262Z" fill="#74B6A6"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="16.9706" width="24" height="24" transform="rotate(45 16.9706 0)" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

const RightDownArrowAnimation = () => {
  return (
    <React.Fragment>
      <motion.div className="container py-2 d-flex justify-content-end px-0"
        animate={{x:[0, 10, 0],  y:[0, 10, 0]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        initial={{opacity: 1}}
        >
        <RightDownArrowImage />
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

export default RightDownArrowAnimation;