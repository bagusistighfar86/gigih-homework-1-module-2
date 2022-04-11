// Libraries
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// CSS
import './home.css';

// Components
import Navbar from '../../components/Navbar/index';
import Sidebar from '../../components/Sidebar';
import CreatePlaylist from '../../components/CreatePlaylist';
import ListPlaylist from '../../components/ListPlaylist';
import SearchResult from '../../components/SearchResult';
import SelectedSong from '../../components/SelectedSong/index';
import RecommendedSong from '../../components/RecommendedSong';

function Home() {
  const accessToken = useSelector((state) => state.token.accessToken);

  const [search, setSearch] = useState('');
  const [dataSearch, setDataSearch] = useState([]);
  const [selectedSong, setSelected] = useState([]);

  const getSpotify = () => {
    fetch(
      `https://api.spotify.com/v1/search?q=${
        search
      }&access_token=${
        accessToken
      }&type=track`,
    )
      .then((res) => res.json())
      .then((dataSong) => {
        // console.log(dataSong);
        setDataSearch(dataSong.tracks.items);
      });
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === '') {
      setDataSearch([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getSpotify();
  };

  return (
    <div className="home">
      <div className="d-flex flex-column">
        <Navbar
          search={search}
          handleChangeSearch={handleChangeSearch}
          handleSubmit={handleSubmit}
        />
        <div className="main d-flex flex-column overflow-hidden">
          <div className="row">
            <div className="col-2 sidebar">
              <Sidebar className="" />
            </div>
            <div className="col-10">
              <div className="content ps-3 pe-3" style={{ height: '100vh' }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
