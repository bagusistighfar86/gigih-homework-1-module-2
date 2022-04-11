// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import PrivateRoute from './components/privateRoute';

// CSS
import './App.css';

// Import Component
import Home from './pages/home/index';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <PrivateRoute path="/create-playlist" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
