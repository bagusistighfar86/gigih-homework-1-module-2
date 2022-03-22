import logo from './logo.svg';
import { Component, Fragment} from 'react';
import './App.css';
import data from './data';

class Album extends Component {
  componentDidMount(){
    try{
      console.log(data);
      const imgAlbum = document.getElementById("img-album");
      const albumTitle = document.getElementById("album-title");
      const artistName = document.getElementById("artist-name");
      const releaseDate = document.getElementById("release-date");
      const totalTracks = document.getElementById("total-tracks");
  
      imgAlbum.src = data.album.images[1].url;
      albumTitle.innerText = data.album.name;
      artistName.innerText = data.artists[0].name;
      releaseDate.innerText = data.album.release_date;
      totalTracks.innerText = data.album.total_tracks;
    }
    catch(err){
      alert(err.message);
    }
  }
  render() {
    return (
      <Fragment>
        <header>
          <div className="left-logo">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
              alt=""
            />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search your music" />
          </div>
          <div className="account text-white">
            <div className="account-photo"></div>
            <p>Halo, Bagus!</p>
          </div>
        </header>

        <div className="main">
          <div className="container">
            <div className="track-info-album">
              <div className="album-img">
                <img id='img-album' src="#" />
              </div>
              <div className="album-detail text-white">
                <h3>Album</h3>
                <h1 id="album-title"></h1>
                <div className="artist-info">
                  <p>Artist : <span id="artist-name"></span></p>
                  <p>Release Date : <span id="release-date"></span></p>
                  <p>Total Tracks : <span id="total-tracks"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Album />
    </div>
  );
}

export default App;
