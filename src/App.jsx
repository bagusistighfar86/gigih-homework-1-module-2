import './App.css';
import Home from "./pages/home/index";
import { Component } from "react";
import {Provider} from 'react-redux'
import store from './redux/store';

class App extends Component {
  // state = {
  //   accessToken: window.location.hash
  //   .substring(1, window.location.hash.length - 1)
  //   .split("&")[0]
  //   .split("=")[1],
  // }
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
