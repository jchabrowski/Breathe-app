import React from 'react';
// import styled from 'styled-components';
// import background from '../../views/wave-background.svg';
// import logo from '../../views/logo.svg';
import { SecondaryContainer, InvertedButton, CenterContainer, Paragraph, ParagraphMuted } from '../../styles/Styles';
import Circle from '../../views/Circle.png'
import Navbar from '../Navbar/Navbar';

const Start = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
        <div className="container py-5">
          <Paragraph>Przygotuj się...</Paragraph>
          <div className="container py-3">
            <img src={Circle} alt="Circle"></img>
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

export default Start;