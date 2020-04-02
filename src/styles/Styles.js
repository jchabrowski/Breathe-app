import styled from 'styled-components';
import background from '../assets/images/background.svg';
// import backgroundShort from '../assets/images/background-short.svg'

  // export const LogoContainer = styled.div`
    
  // `

  export const Container = styled.div`
    background-image: url(${background});
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
    bottom: 0;
    margin: 0;
    padding: 0;
  `;

  export const SecondaryContainer = styled.div`
    background-image: url(${background});
    background-position: 50% 150%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
    margin: 0;
    padding: 0;
  `;

  export const BoxLogo = styled.div`
    padding-top: 10rem;
    padding-bottom: 10rem;
  `

  export const Buttons = styled.div`
    padding-top: 5rem;
  `

  export const CenterContainer = styled.div`
    padding-top: 3rem;
    margin-bottom: 0;
    height: 50%;
  `

  export const Button = styled.button`
    background-color: #FFFFFF;
    color: #78CFBA;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    width: 15rem;
    padding: 1rem;
    margin: 0.7rem;
    font-size: 1.5rem;
    transition: 0.3s ease-in-out;
    &:hover {
      box-shadow:  3px 3px 7px #000;
      transition: box-shadow 0.3s ease-in-out;
    };
    &:focus {
      outline: 0;
    };
  `;

  export const InvertedButton = styled.button`
    background-color: #56C6AB;
    color: #FFFFFF;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    width: 15rem;
    padding: 1rem;
    margin: 0.7rem;
    font-size: 1.5rem;
    &:hover {
      box-shadow:  3px 3px 7px #000;
      transition: box-shadow 0.3s ease-in-out;
    };
    &:focus {
      outline: 0;
    };
  `;

  export const Paragraph = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    color: #78CFBA;
  `

  export const ParagraphMuted = styled.p`
    font-size: 1.2rem;
    font-weight: regular;
    color: #78CFBA;
  `