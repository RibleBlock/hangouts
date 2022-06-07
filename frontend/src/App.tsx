import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import { AppRoute } from './Routes';
import store from './store';
import defaultTheme from './themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <GlobalStyles />
        <AppRoute />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
