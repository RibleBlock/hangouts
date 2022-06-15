import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import { AppRoute } from './Routes';
import { store } from './store';
import defaultTheme from './themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <GlobalStyles />
        <AppRoute />
        <ToastContainer
          style={{ fontSize: '1.4rem' }}
          position="bottom-center"
          newestOnTop
          limit={2}
          theme="colored"
        />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
