import React from 'react';
// import styled from 'styled-components';
// import background from '../../views/wave-background.svg';
// import logo from '../../views/logo.svg';
import { SecondaryContainer, Buttons, Button, InvertedButton, CenterContainer } from '../../styles/Styles';
import Navbar from '../Navbar/Navbar';

const Test = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
        <div className="container py-5">
          <p className="lead">W ciągu 3 sekund należy wciągnąć nosem jak najwięcej powietrza, a następnie jak najdłużej wydmuchiwać je ustami.</p>
          <p className="lead">Gdy będzie Pan/i gotowy/a proszę nacisnąć przycisk "Rozpocznij".</p>
          <p className="text-muted">Pojawi się dalsza instrukcja!</p>
        </div>

        <CenterContainer className="d-flex flex-column align-items-center">
          <InvertedButton>Rozpocznij</InvertedButton>
        </CenterContainer>
      </SecondaryContainer>
    </div>
  )
};

export default Test;