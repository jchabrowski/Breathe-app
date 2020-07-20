import React from 'react';
import { motion } from 'framer-motion';
import { Paragraph }  from '../../../styles/Styles';

const InhaleAnimation = () => {
  return (
    <React.Fragment>
      <motion.div
        animate={{opacity: [1, 0.4, 0]}}
        transition={{ease: "easeInOut", duration: 3}}
        >
          <Paragraph>Wdech...</Paragraph>
      </motion.div>
    </React.Fragment>
  );
};

export default InhaleAnimation;