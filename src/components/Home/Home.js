import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg'
import { BoxLogo, Button, Buttons, MainContainer } from '../../styles/Styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home = () => {
  
  const { t } = useTranslation();

  return (
  <MainContainer className="d-flex min-vh-100 flex-column justify-content-center">
    <Row>
      <Col
        className="text-center my-5"
        xs={ 12 }
        md={{ span: 6, offset: 3 }}
        lg={{ span: 4, offset: 4 }}>
          <motion.div className=""
            key="home"
            exit={{opacity: 0}}
            animate={{opacity: 1}}
            initial={{opacity: 0}}>
            <BoxLogo>
              <img src={logo} alt="logo"></img>
            </BoxLogo>
          </motion.div>
        
          <Buttons className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Link to="/BreatheTest">
              <Button>{t("MAIN_MENU.TEST_BUTTON")}</Button>
            </Link>

            <Link to="/Exercise">
              <Button>{t("MAIN_MENU.EXERCISE_BUTTON")}</Button>
            </Link>
            
            <Link to ="/Info">
              <Button>{t("MAIN_MENU.INFO_BUTTON")}</Button>
            </Link>
          </Buttons> 
      </Col>
    </Row>
  </MainContainer>
  )
};

export default Home;