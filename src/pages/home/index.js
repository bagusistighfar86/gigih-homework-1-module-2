import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import Song from "../../components/Song/index";
import song_dummy from "../../song_dummy";

const Home = () => {
  const [accessToken, setToken] = useState(window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split("&")[0]
    .split("=")[1])

  const [search, setSearch] = useState("")
  const [dataSearch, setDataSearch] = useState([])
  const [selectedSong, setSelected] = useState([]);


  const getSpotify = () => {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
      search +
      "&type=track&limit=10&access_token=" +
      accessToken
    )
      .then((res) => res.json())
      .then((dataSong) => {
        // console.log(dataSong);
        setDataSearch(dataSong.tracks.items);
      });
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setDataSearch([])
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getSpotify();
  };

  return (
    <>
      <Navbar
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        getSpotify={getSpotify}
        accessToken={accessToken}
      />
      <div className="main">
        <div className="container">
          <h1 className="text-white">Selected Songs</h1>
          {selectedSong.map((item) => (
            <Song
              uri={item.uri}
              data={item}
              selectedSong={selectedSong}
              setSelected={setSelected}
            />
          ))}
          {dataSearch.length > 0 &&
            <>
              <h1 className="text-white">Search Result</h1>
              {dataSearch.map((item) => (
                <Song
                  uri={item.uri}
                  data={item}
                  selectedSong={selectedSong}
                  setSelected={setSelected}
                />
              ))}
            </>
          }
          {dataSearch.length === 0 &&
            <>
              <h1 className="text-white">Recommended Songs</h1>
              {song_dummy.map((item) => (
                <Song
                  uri={item.uri}
                  data={item}
                  selectedSong={selectedSong}
                  setSelected={setSelected}
                />
              ))}
            </>
          }
        </div>
      </div>
    </>
  )
};

export default Home;