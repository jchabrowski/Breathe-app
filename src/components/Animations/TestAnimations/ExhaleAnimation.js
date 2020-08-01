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
    let safetyInfo = <ParagraphSmaller>{t("START_TEST.SAFETY_INFO")}</ParagraphSmaller>;
    let message = safetyInfo;
    setMessage(message);
    let isTimerOn = true;
    setTimer(isTimerOn)
  }, [t]);
  
  
  let stopTimer = () => {
    let message = <><ParagraphSmaller>{t("START_TEST.AFTER_THANK_YOU")}</ParagraphSmaller><ParagraphSmaller>{t("START_TEST.AFTER_SCORE")}<Timer.Seconds /> {t("TIME.SECONDS", { count: timerEl.current.state.s})}</ParagraphSmaller></>
      setMessage(message);
      let isTimerOn = false;
      setTimer(isTimerOn);
      setCircle(false);
    }

    let maxBreatheLength = () => {
      let message = <ParagraphSmaller>{t("START_TEST.AFTER_MAX_EXHALE")}</ParagraphSmaller>;
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
            <Paragraph>{t("ANIMATIONS.EXHALE")}</Paragraph>
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
                    <Button onClick={stop}>{t("BUTTONS.STOP")}</Button>
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