// Libraries
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { store } from './redux/store';
import PrivateRoute from './components/privateRoute';
import Layout from './components/LayoutComponent/layout';

// CSS
import './App.css';

// Import Component
import Home from './pages/home/index';
import LoginPage from './pages/loginPage';
import CreatePlaylist from './components/CreatePlaylist';
import ListPlaylist from './components/ListPlaylist';
import Account from './components/AccountProfile';
import Settings from './components/Settings';

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
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Layout>
              <PrivateRoute path="/create-playlist" comp={CreatePlaylist} />
              <PrivateRoute path="/home" comp={Home} />
              <PrivateRoute path="/list-playlist" comp={ListPlaylist} />
              <PrivateRoute path="/account" comp={Account} />
              <PrivateRoute path="/setting" comp={Settings} />
            </Layout>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
