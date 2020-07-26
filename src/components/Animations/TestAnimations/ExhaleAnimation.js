import React, { useEffect, useState, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { Paragraph }  from '../../../styles/Styles';
import Timer from 'react-compound-timer';
import { Button, ParagraphSmaller} from '../../../styles/Styles';
import CircleContext from './CircleContext';
import { useTranslation } from 'react-i18next';

const ExhaleAnimation = () => {

  const { t } = useTranslation();
  
  const timerEl = useRef(null);
  
  const [message, setMessage] = useState();
  const [isTimerOn, setTimer] = useState();
  const {circle, setCircle} = useContext(CircleContext);
  
  useEffect(() => {
    let safetyInfo = <ParagraphSmaller>Jeżeli poczuje się Pan/i słabo należy przerwać próbę.</ParagraphSmaller>;
    let message = safetyInfo;
    setMessage(message);
    let isTimerOn = true;
    setTimer(isTimerOn)
  }, []);
  
  
  let stopTimer = () => {
      let message = <><ParagraphSmaller>Dziękujemy za wykonanie Testu!</ParagraphSmaller><ParagraphSmaller>Pana/i Wynik to <Timer.Seconds /> {t("TIME.SECONDS", { count: timerEl.current.state.s})}</ParagraphSmaller></>
      setMessage(message);
      let isTimerOn = false;
      setTimer(isTimerOn);
      setCircle(false);
    }

    let maxBreatheLength = () => {
      let message = <ParagraphSmaller>Dziękujemy za wykonanie Testu! Udało się Panu/i wydmuchiwać powietrze przez 45 sekund!</ParagraphSmaller>;
      setMessage(message);
      let isTimerOn = false;
      setTimer(isTimerOn);
      timerEl.current.pause();
      setCircle(false);
    } 
  
  return (
    <React.Fragment>
      {circle?
        <motion.div 
          animate={{opacity: [0, 0.4, 1]}}
          transition={{ ease: "easeIn", duration: 45, times: [0, 0.1, 1]}}>
            <Paragraph>Wydech...</Paragraph>
        </motion.div>
      : null }
        <Timer
          ref={timerEl} 
          checkpoints={[
            {time: 45000,
            callback: () =>  maxBreatheLength()}
          ]}
          onStop = {() => stopTimer()}>
          {({stop}) => (
          <React.Fragment>
            <motion.div
                  animate={{opacity: [0, 1]}}
                  transition={{ease: "easeInOut", duration: 2}}>
                  {isTimerOn?
                    <Timer.Seconds /> 
                  : null} 
                    <br></br>
                    <Button onClick={stop}>Stop</Button>
                  </motion.div>

                  <motion.div
                    animate={{opacity: [0, 1]}}
                    transition={{ease: "easeInOut", duration: 2, delay: 2}}>    
                    {message ? message : null}
                  </motion.div>
          </React.Fragment>
          )}
        </Timer>
    </React.Fragment>
  );
};

export default ExhaleAnimation;