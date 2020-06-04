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
    }, []);

    let testFunction = () => {
      let exerciseDoneInfo = <><ParagraphSmaller>Dziękujemy za wykonanie Testu!</ParagraphSmaller><ParagraphSmaller>Pana/i Wynik to xx sekund!</ParagraphSmaller></>
      let message = exerciseDoneInfo;
      setMessage(message);
    }

    let maxBreatheFunction = () => {
      let exerciseDoneInfo = <ParagraphSmaller>Dziękujemy za wykonanie Testu! Udało się Panu/i wydmuchiwać powietrze przez 45 sekund!</ParagraphSmaller>
      let message = exerciseDoneInfo;
      setMessage(message);
    } 
  

  
  return (
    <React.Fragment>
      <motion.div 
        animate={{opacity: [0, 0.4, 1]}}
        transition={{ ease: "easeIn", duration: 45, times: [0, 0.1, 1]}}>
          <Paragraph>Wydech...</Paragraph>
      </motion.div>
        <Timer 
          checkpoints={[
            {time: 45000,
            callback: () =>  maxBreatheFunction()}
          ]}
          onStop = { () => testFunction()}>
          {({stop}) => (
          <React.Fragment>
                <motion.div
                  animate={{opacity: [0, 1]}}
                  transition={{ease: "easeInOut", duration: 2}}>
            
                    <Timer.Seconds />
                    <br></br>
                    <Button onClick={stop}>Stop</Button>

                  </motion.div>               
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