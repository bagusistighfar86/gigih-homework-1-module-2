import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import SelectedSong from "../../components/SelectedSong/index";
import SearchResult from "../../components/SearchResult";
import RecommendedSong from "../../components/RecommendedSong";
import CreatePlaylist from "../../components/CreatePlaylist";
import ListPlaylist from "../../components/ListPlaylist";
import { useSelector } from "react-redux";

const Home = () => {
  const accessToken = useSelector((state) => state.auth.token)

  const [search, setSearch] = useState("")
  const [dataSearch, setDataSearch] = useState([])
  const [selectedSong, setSelected] = useState([]);

  const getSpotify = () => {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
      search +
      "&access_token=" +
      accessToken +
      "&type=track"
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
      />
      <div className="main">
        <div className="container">
          <CreatePlaylist
            selectedSong={selectedSong}
            setSelected={setSelected}
          />
          <ListPlaylist
            selectedSong={selectedSong}
            setSelected={setSelected}
          />
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
          />
        </div>
      </div>
    </>
  )
};

export default Home;