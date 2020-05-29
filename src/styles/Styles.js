import styled from 'styled-components';
import background from '../assets/images/background.svg';
import { Container } from 'react-bootstrap';
// import backgroundShort from '../assets/images/background-short.svg'

  // export const LogoContainer = styled.div`
    
  // `

  export const MainContainer = styled(Container)`
  max-width: 500px;
  background: rgb(120,207,186);
  background: linear-gradient(0deg, rgba(120, 207, 186, 1) 0%, rgba(255, 255, 255, 1) 100%);
  `;

  export const SecondaryContainer = styled.div`
    background-image: url(${background});
    background-position: 50% 130%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
    margin: 0;
    padding: 0;
    min-width: 500px;
    max-width: 500px;
  `;
  
  export const CenterContainer = styled.div`
    padding-top: 3rem;
  `;

  export const BottomContainer = styled.div`
  position: absolute;
  bottom: 100px;
  `


  export const BoxLogo = styled.div`
    
  `;

  export const Buttons = styled.div`
    
  `;

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
    font-weight: regular;
    color: #216353;
  `;

  export const OneLineParagraph = styled.p`
    font-size: 1.3rem;
    font-weight: regular;
    color: #216353;
    max-width: 500px;
  `
  export const ParagraphSmaller = styled.p`
    font-size: 1.1rem;
    font-weight: regular;
    // color: #a0ddce;
    color: #216353;
    `;

  export const ParagraphMuted = styled.p`
    font-size: 1.2rem;
    font-weight: regular;
    color: #78CFBA;
  `