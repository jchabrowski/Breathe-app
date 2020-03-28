import React from 'react';
import { SecondaryContainer, InvertedButton, CenterContainer, Paragraph} from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Info = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
        <div className="container py-5">
          <Paragraph>Aplikacja "oddech" wykorzystuje uzyskany w teście czas wydechu i na jego podstawie ustala długość ćwiczeń, dobranych do Pana/i możliwości.</Paragraph>
          <Paragraph>Aby ćwiczenia były skuteczne powinny być wykonywane codziennie, w ilości 3 serii.</Paragraph>
        </div>

        <CenterContainer className="d-flex flex-column align-items-center">
          <Link to="/">
            <InvertedButton>Wróc do Menu</InvertedButton>
          </Link>
        </CenterContainer>
      </SecondaryContainer>
    </div>
  )
};

export default Info;