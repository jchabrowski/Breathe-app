import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';
import { Button,  Paragraph, ParagraphSmaller, MainContainer } from '../../styles/Styles';
import { Link } from 'react-router-dom';
import Circle from '../../assets/images/Circle.svg'
import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';

export const InfoTest = () => {

  const { t } = useTranslation();

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto my-auto">
        <Col
          className="text-center my-5 py-4 mx-auto"
          xs={ 12 }
          md={ 12 }
          lg={ 12 }>
            <motion.div className="container pt-5"
              key="info-test"
              initial={{width: "200px", height:"200px"}}
              animate={{
                scale: [1, 1.5, 0.5]
              }}
              transition={{ 
                duration: 30,
                times: [0, 0.1, 1],
                loop: Infinity
                }}
                >
              <img src={Circle} alt="Circle"/>
            </motion.div>
            <Paragraph>{t("INFO_TEST.PARAGRAPH_1")}</Paragraph>
            <Paragraph>{t("INFO_TEST.PARAGRAPH_2")}</Paragraph>
            <ParagraphSmaller>{t("INFO_TEST.PARAGRAPH_3")}</ParagraphSmaller>

            <Link to="/StartTest"> 
            <Button>{t("INFO_TEST.START_BUTTON")}</Button>
          </Link>
        </Col>
    </Row>
    <Navbar></Navbar>
  </MainContainer>
  )
};

export default InfoTest;