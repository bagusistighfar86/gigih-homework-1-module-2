// Libraries
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './redux/store';
import PrivateRoute from './components/privateRoute';
import Layout from './components/LayoutComponent/layout';

// CSS
import './App.css';

// Import Component
import Home from './pages/home/index';
import LoginPage from './pages/loginPage';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100px',
        },
      },
    },
  },
});

function App() {
  if (document.readyState === 'complete') {
    AOS.refresh();
  }

  window.addEventListener('load', AOS.refresh);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease',
      delay: 0,
    });
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <Layout>
                <PrivateRoute path="/create-playlist" component={Home} />
              </Layout>
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
