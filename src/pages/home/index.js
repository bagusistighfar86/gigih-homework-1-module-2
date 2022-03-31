import React from "react";
import Navbar from "../../components/Navbar/index";
import Song from "../../components/Song/index";


class Home extends React.Component {
  state = {
    accessToken: window.location.hash
      .substring(1, window.location.hash.length - 1)
      .split("&")[0]
      .split("=")[1],
    search: "",
    data: [],
  };

  getSpotify = () => {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
      this.state.search +
      "&type=track&limit=10&access_token=" +
      this.state.accessToken
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.tracks.items,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.getSpotify();
  };

  render() {
    return (
      <>
        <Navbar search={this.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} getSpotify={this.getSpotify} accessToken={this.state.accessToken} />
        <div className="main">
          <div className="container">
            {this.state.data.map((item) => (
              <Song key={item.id} data={item} />
            ))}
          </div>
        </div>
      </>
    )
  }
}

// const Home = () => {
//   return (

//   );
// };

export default Home;