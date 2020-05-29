import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Paragraph }  from '../../../styles/Styles';
import Timer from 'react-compound-timer';
import { Button, ParagraphSmaller } from '../../../styles/Styles';

const ExhaleAnimation = () => {

  const [message, setMessage] = useState();

  useEffect(() => {
    let safetyInfo = <ParagraphSmaller>Jeżeli poczuje się Pan/i słabo należy przerwać próbę.</ParagraphSmaller>;
    let message = safetyInfo;
    setMessage(message);

    // const stopTimer = () => {
    //   let exerciseDoneInfo = <ParagraphSmaller>Dziękujemy za wykonanie Testu. Pana/i wynik to 'test' sekund</ParagraphSmaller>
    //   let message = exerciseDoneInfo;
    //   setMessage(message);
    //   }
    }, []);

    let testFunction = () => {
      let exerciseDoneInfo = <ParagraphSmaller>Dziękujemy za wykonanie Testu!</ParagraphSmaller>
      let message = exerciseDoneInfo;
      setMessage(message);
    }

    let maxBreatheFunction = () => {
      let exerciseDoneInfo = <ParagraphSmaller>Dziękujemy za wykonanie Testu!</ParagraphSmaller>
      let message = exerciseDoneInfo;
      setMessage(message);
    } 
  

  
  return (
    <React.Fragment>
      <motion.div 
        animate={{opacity: [0, 0.8, 1]}}
        transition={{ ease: "easeIn", duration: 45, times: [0, 0.1, 1]}}>
          <Paragraph>Wydech...</Paragraph>
      </motion.div>
        <Timer 
          checkpoints={[
            {time: 60000,
            callback: () =>  maxBreatheFunction()}
          ]}
          onStop = { () => testFunction()}>
          {({stop}) => (
          <React.Fragment>
                <motion.div
                  animate={{opacity: [0, 1]}}
                  transition={{ease: "easeIn", duration: 2}}>
            
                  
                    <Timer.Seconds />
                    
          
                  </motion.div>

                    <Button onClick={stop}>Stop</Button>
                
                <motion.div
                  animate={{opacity: [0, 1]}}
                  transition={{ease: "easeIn", duration: 2, delay: 2}}>
                    {message ? message : null}
                    
                </motion.div>
          </React.Fragment>
          )}
        </Timer>
    </React.Fragment>
  );
};

export default ExhaleAnimation;