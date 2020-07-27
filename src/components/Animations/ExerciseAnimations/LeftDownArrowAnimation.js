import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph } from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';

const LeftDownArrowImage = () => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M19.815 25.7C20.2855 25.7081 20.6702 25.3233 20.6702 24.8447C20.6702 24.3823 20.2855 23.9975 19.8236 23.9981L11.1502 23.9981L25.4607 9.68762C25.7937 9.35349 25.7937 8.82319 25.4602 8.4896C25.1266 8.15601 24.5876 8.14738 24.2541 8.48098L9.9436 22.7914L9.95168 14.1262C9.9436 13.6557 9.55827 13.2703 9.09642 13.2709C8.61786 13.2709 8.23253 13.6562 8.24115 14.1262L8.24115 24.8528C8.23307 25.3233 8.61786 25.7081 9.08779 25.6994L19.815 25.7Z" fill="#74B6A6"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="33.9411" y="16.9706" width="24" height="24" transform="rotate(135 33.9411 16.9706)" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

const LeftDownArrowAnimation = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <motion.div className="container py-2 d-flex justify-content-start px-0"
        animate={{x:[0, -10, 0],  y:[0, 10, 0]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        initial={{opacity: 1}}
        >
        <LeftDownArrowImage />
      </motion.div>

      <motion.div
        animate={{opacity: [1, 0.4, 1]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        >
        <Paragraph>{t("ANIMATIONS.EXHALE")}</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default LeftDownArrowAnimation;