import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph } from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';

const RightArrowImage = () => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M8.24115 19.815C8.23307 20.2854 8.61786 20.6702 9.09642 20.6702C9.55881 20.6702 9.9436 20.2854 9.94306 19.8236L9.94306 11.1502L24.2535 25.4607C24.5876 25.7937 25.1179 25.7937 25.4515 25.4601C25.7851 25.1266 25.7937 24.5876 25.4602 24.254L11.1497 9.94359L19.815 9.95167C20.2855 9.94359 20.6708 9.55826 20.6702 9.09641C20.6702 8.61785 20.2849 8.23252 19.815 8.24114H9.08833C8.61786 8.23306 8.23307 8.61785 8.24169 9.08779L8.24115 19.815Z" fill="#74B6A6"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="16.9706" y="33.9411" width="24" height="24" transform="rotate(-135 16.9706 33.9411)" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  )
}

const RightArrowAnimation = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <motion.div className="container py-2 d-flex justify-content-end px-0"
        animate={{x:[0, -10, 0],  y:[0, -10, 0]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        initial={{opacity: 1}}
        >
        <RightArrowImage />
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

export default RightArrowAnimation;