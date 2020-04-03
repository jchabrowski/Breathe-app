import React from 'react';
import { SecondaryContainer, InvertedButton, CenterContainer, Paragraph} from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
const Info = () => {

  return (
    <div className="container  d-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-10 col-lg-8 align-items-center text-center">
        <Navbar></Navbar>
        <motion.div 
          className="container py-5 vh-50 align-items-center"
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          >
          <Paragraph>Aplikacja "oddech" wykorzystuje uzyskany w teście czas wydechu i na jego podstawie ustala długość ćwiczeń, dobranych do Pana/i możliwości.</Paragraph>
          <Paragraph>Aby ćwiczenia były skuteczne powinny być wykonywane codziennie, w ilości 3 serii.</Paragraph>
          <Link to="/">
            <InvertedButton>Wróć do Menu</InvertedButton>
          </Link>
        </motion.div>

        <CenterContainer className="d-flex flex-column align-items-center py-0">
        </CenterContainer>
      </SecondaryContainer>
    </div>
  )
};

export default Info;