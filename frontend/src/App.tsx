import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import { AppRoute } from './Routes';
import defaultTheme from './themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
