import styled from 'styled-components';
import background from '../assets/images/background.svg';
// import backgroundShort from '../assets/images/background-short.svg'

  export const Container = styled.div`
    background-image: url(${background});
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
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
    padding-top: 10em;
  `

  export const Buttons = styled.div`
    padding-top: 17em;
  `

  export const CenterContainer = styled.div`
    padding-top: 3rem;
    padding-bottom: 5rem;
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