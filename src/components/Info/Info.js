import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MainContainer, Button, Paragraph} from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Smiley = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#74B6A6"/>
      <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#74B6A6"/>
      <path d="M12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#74B6A6"/>
    </svg>
  )
}

const Info = () => {

  const { t } = useTranslation();

  return (
    <MainContainer className="d-flex min-vh-100 flex-column justify-content-center px-0">
      <Row className="mx-auto">
        <Col
          className="text-center my-5 py-4 mx-auto "
          xs={ 12 }
          md={ 12 }
          lg={ 12 }>
            <motion.div className="container pt-5">
              <Paragraph>{t("INFO.PARAGRAPH_1")}</Paragraph>
              <Paragraph>{t("INFO.PARAGRAPH_2")}</Paragraph>
              <Paragraph>{t("INFO.GOODLUCK")}<Smiley /> </Paragraph>
              <Link to="/">
                <Button className="mb-5">{t("INFO.MENU_BUTTON")}</Button>
              </Link>
            </motion.div>
        </Col>
    </Row>
    <Navbar></Navbar>
  </MainContainer>
  )
};

export default Info;


