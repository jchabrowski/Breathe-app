import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph }  from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';

const ThankYouAnimation = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <motion.div className="container pt-2 justify-content-center px-0"
        animate={{opacity: [0.7, 0.4, 0.7]}}
        transition={{ease: "easeInOut", duration:2, loop: 4}}
        >
        <Paragraph>{t("ANIMATIONS.THANK_YOU_MESSAGE")}</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default ThankYouAnimation;