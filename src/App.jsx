import './App.css';
import Home from "./pages/home/index";
import {Provider} from 'react-redux'
import store from './redux/store';
import LoginPage from './pages/loginPage';
import PrivateRoute from './components/privateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <PrivateRoute path="/create-playlist" component={Home}></PrivateRoute>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
}

export default App;
