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

  body::-webkit-scrollbar {
  width: calc(1em / 2);
}

body::-webkit-scrollbar-track {
  background-color: transparent;
}

body::-webkit-scrollbar-thumb {
  border-radius: 100rem;
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
hr {
    width: 100%;
    height: .1rem;
    background-color: #00000040;
  }
`;
