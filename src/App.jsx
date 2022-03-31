import './App.css';
import Home from "./pages/home/index";
// import Login from  './components/login';
// import Search from "./components/search/index";
import { Component } from "react";

class App extends Component {
  state = {
    accessToken: window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split("&")[0]
    .split("=")[1],
  }
  render() {
    return (
      <div className="App">
        <Home />
      </div>
      // <div className="App">
      //   {this.state.accessToken ? <Search /> : <Login />}
      // </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

export default App;
