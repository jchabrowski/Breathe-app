import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MainContainer, Button, Paragraph, ParagraphSmaller } from '../../styles/Styles';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Test = () => {

  const { t } = useTranslation();

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
    <Row className="mx-auto">
      <Col
        className="text-center my-5 mx-auto "
        xs={ 12 }
        md={ 12 }
        lg={ 12 }>
          <motion.div className="container mb-5"
            key="breathe-test"
            exit={{opacity: 0}}
            animate={{opacity: 1}}
            initial={{opacity: 0}}>
              <Paragraph>{t("BREATHE_TEST.PARAGRAPH_1")}</Paragraph>
              <Paragraph>{t("BREATHE_TEST.PARAGRAPH_2")}</Paragraph>
              <ParagraphSmaller>{t("BREATHE_TEST.PARAGRAPH_3")}</ParagraphSmaller>

              <Link to="/InfoTest"> 
                <Button>{t("BREATHE_TEST.PROCEED_BUTTON")}</Button>
              </Link>
          </motion.div>
      </Col>
    </Row>
  <Navbar></Navbar>
  </MainContainer>
  )};

export default Test;