import React from 'react';
import Velocity from 'velocity-animate';
import { SecondaryContainer, InvertedButton, CenterContainer, Paragraph, ParagraphMuted } from '../../styles/Styles';
import Circle from '../../assets/images/Circle.svg'
import Navbar from '../Navbar/Navbar';

const StartTest = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
        <div className="container py-5">
          <Paragraph>Przygotuj się...</Paragraph>


          <div className="container py-3">
            {/* {Circle.Velocity()} */}
            {/* <img src={Circle} alt="Circle"></img> */}
          </div>
          <ParagraphMuted>Wdech...</ParagraphMuted>
        </div>

        <CenterContainer className="d-flex flex-column align-items-center">
          <InvertedButton>Start!</InvertedButton>
        </CenterContainer>
      </SecondaryContainer>
    </div>
  )
};

export default StartTest;