import './App.css';
import Home from "./pages/home/index";
import { Component } from "react";
import {Provider} from 'react-redux'
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
