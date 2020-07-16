import React from 'react';
import { motion } from 'framer-motion';
import Circle from '../../../assets/images/Circle.svg'

const CircleAnimation = () => {
  return (
    <motion.div className="container pt-5"
              initial={{width: "200px", height:"200px"}}
              animate={{
                scale: [1, 1.5, 0.5]
              }}
              transition={{ 
                duration: 30 ,
                times: [0, 0.1, 1],
                loop: 0
                }}
                >
              <img src={Circle} alt="Circle"/>
            </motion.div>
  )
}

export default CircleAnimation