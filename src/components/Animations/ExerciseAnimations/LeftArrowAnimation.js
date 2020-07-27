import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph }  from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';

const LeftArrowImage = () => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M14.1261 8.24118C13.6557 8.2331 13.2709 8.61789 13.2709 9.09645C13.2709 9.55884 13.6557 9.94363 14.1175 9.94309L22.7909 9.94309L8.48043 24.2535C8.14738 24.5877 8.14738 25.118 8.48097 25.4516C8.81456 25.7852 9.35348 25.7938 9.68707 25.4602L23.9975 11.1497L23.9894 19.815C23.9975 20.2855 24.3829 20.6708 24.8447 20.6703C25.3233 20.6703 25.7086 20.2849 25.7 19.815V9.08836C25.7081 8.61789 25.3233 8.2331 24.8533 8.24172L14.1261 8.24118Z" fill="#74B6A6"/>
      </g>
      <defs>
      <clipPath id="clip0">
        <rect y="16.9706" width="24" height="24" transform="rotate(-45 0 16.9706)" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  );
}

const LeftArrowAnimation = () => {

  const { t } = useTranslation();
  
  return (
    <React.Fragment>
      <motion.div className="container py-2 d-flex justify-content-start px-0"
        animate={{x:[0, 10, 0],  y:[0, -10, 0]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        exit={{opacity: 0}}
        initial={{opacity: 1}}
        >
        <LeftArrowImage />
      </motion.div>

      <motion.div 
        animate={{opacity: [1, 0.4, 1]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        >
        <Paragraph>{t("ANIMATIONS.INHALE")}</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default LeftArrowAnimation;