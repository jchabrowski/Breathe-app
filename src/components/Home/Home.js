import React from 'react';
import styled from 'styled-components';
import background from '../../views/wave-background.svg';
import logo from '../../views/logo.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const Container = styled.div`
    background-image: url(${background});
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 727px;
  `;

  const BoxLogo = styled.div`
    margin-top: 15%;
  `

  const Buttons = styled.div`
  margin-top: 60%;
  `

  const Button = styled.button`
  background-color: white;
  color: #78CFBA;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  width: 15rem;
  padding: 1rem;
  margin: 0.7rem;
  font-size: 1.5rem;
  `;


  return (
    <div className="container-sm d-md-flex justify-content-center px-0">
      <Container className="col-sm-12 col-md-6 align-items-center text-center">
        <BoxLogo>
          <img src={logo} alt="logo"></img>
        </BoxLogo>

        <Buttons className="d-flex flex-column align-items-center">
          <Button>Rozpocznij test</Button>
          <Button>Twoje ćwiczenia</Button>
          <Button>Informacje</Button>

        </Buttons> 
      </Container>
    </div>
  )
};

export default Home;