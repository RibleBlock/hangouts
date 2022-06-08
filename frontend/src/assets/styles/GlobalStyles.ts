import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  body, input, button, :root {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    color: ${({ theme }) => theme.COLORS.primary};
    background-color: ${({ theme }) => theme.COLORS.secondary};
  }
`;
