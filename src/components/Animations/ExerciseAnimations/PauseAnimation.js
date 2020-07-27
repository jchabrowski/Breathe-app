import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph } from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';

const PauseImage = () => {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4853 3.51469C18.2188 1.24823 15.2053 0 12 0C8.79464 0 5.78119 1.24823 3.51469 3.51469C1.24823 5.78119 0 8.79464 0 12C0 15.2054 1.24823 18.2188 3.51469 20.4853C5.78119 22.7518 8.79464 24 12 24C15.2053 24 18.2188 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79469 22.7518 5.78119 20.4853 3.51469ZM12 22.5938C6.15858 22.5938 1.40625 17.8414 1.40625 12C1.40625 6.15858 6.15858 1.40625 12 1.40625C17.8414 1.40625 22.5938 6.15858 22.5938 12C22.5938 17.8414 17.8414 22.5938 12 22.5938Z" fill="#74B6A6"/>
      <path d="M14.2593 6.45575C13.871 6.45575 13.5562 6.77056 13.5562 7.15887V16.8412C13.5562 17.2295 13.871 17.5443 14.2593 17.5443C14.6476 17.5443 14.9624 17.2295 14.9624 16.8412V7.15887C14.9624 6.77056 14.6476 6.45575 14.2593 6.45575Z" fill="#74B6A6"/>
      <path d="M9.74057 6.45575C9.35226 6.45575 9.03745 6.77056 9.03745 7.15887V16.8412C9.03745 17.2295 9.35226 17.5443 9.74057 17.5443C10.1289 17.5443 10.4437 17.2295 10.4437 16.8412V7.15887C10.4437 6.77056 10.1289 6.45575 9.74057 6.45575Z" fill="#74B6A6"/>
    </svg>
  )
}

const PauseAnimation = () => {

  const { t } = useTranslation();
  
  return (
  <React.Fragment>
    <motion.div className="container py-2 d-flex justify-content-center px-0"
      animate={{opacity: [1, 0.8, 1]}}
      transition={{ease: "easeInOut", duration:2, loop: 4}}
      >
      <PauseImage />
    </motion.div>

    <motion.div 
      animate={{opacity: [1, 0.4, 1]}}
      transition={{ease: "easeInOut", duration:2, loop: 4}}
      >
      <Paragraph>{t("ANIMATIONS.HOLD")}</Paragraph>
    </motion.div>
  </React.Fragment>
  );
};

export default PauseAnimation;