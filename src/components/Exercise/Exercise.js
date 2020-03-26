import React from 'react';
import { SecondaryContainer, InvertedButton, CenterContainer } from '../../styles/Styles';
import { Link  } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Exercise = () => {

  return (
    <div className="container-sm  d-sm-flex align-items-center justify-content-center px-0">
      <SecondaryContainer className="col-sm-12 col-md-8 col-lg-6 align-items-center text-center">
        <Navbar></Navbar>
        <div className="container py-5">
          <p>PLACEHOLDER</p>
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

export default Exercise;