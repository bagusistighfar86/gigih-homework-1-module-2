import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import SelectedSong from "../../components/SelectedSong/index";
import SearchResult from "../../components/SearchResult";
import RecommendedSong from "../../components/RecommendedSong";
import CreatePlaylist from "../../components/CreatePlaylist";
import ListPlaylist from "../../components/ListPlaylist";
import axios from 'axios';

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

  const handleChangeSearch = (event) => {
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
        handleChangeSearch={handleChangeSearch}
        handleSubmit={handleSubmit}
        getSpotify={getSpotify}
        accessToken={accessToken}
      />
      <div className="main">
        <div className="container">
          <CreatePlaylist
            selectedSong={selectedSong}
            setSelected={setSelected}
            dataSearch={dataSearch}
            accessToken={accessToken}
          />
          <ListPlaylist/>
          <SelectedSong 
            selectedSong={selectedSong}
            setSelected={setSelected}
          />
          <SearchResult
            selectedSong={selectedSong}
            setSelected={setSelected}
            dataSearch={dataSearch}
          />
          <RecommendedSong
            selectedSong={selectedSong}
            setSelected={setSelected}
            dataSearch={dataSearch}
          />
        </div>
      </div>
    </>
  )
};

export default Home;