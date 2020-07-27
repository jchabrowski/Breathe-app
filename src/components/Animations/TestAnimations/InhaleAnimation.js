import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph }  from '../../../styles/Styles';
import { useTranslation } from 'react-i18next';

const InhaleAnimation = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <motion.div
        animate={{opacity: [1, 0.4, 0]}}
        transition={{ease: "easeInOut", duration: 3}}
        >
          <Paragraph>{t("ANIMATIONS.INHALE")}</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default InhaleAnimation;