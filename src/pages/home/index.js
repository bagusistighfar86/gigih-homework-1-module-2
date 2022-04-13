// Libraries
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// CSS
import './home.css';

import guitarBoy from '../../assets/img/guitar-boy.png';

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
        <div className="main d-flex flex-column overflow-hidden text-white">
          <div className="row">
            <div className="col-2 sidebar">
              <Sidebar className="" />
            </div>
            <div className="col-10">
              <div className="content ps-3 pe-3" style={{ height: '100vh' }}>
                <div className="main-header reveal">
                  <div
                    className="upgrade-box bg-danger text-white d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="upgrade-box-img w-50">
                      <img src={guitarBoy} alt="guitarBoy" className="guitarBoy" width="500px" height="500px"></img>
                    </div>
                    <div className="upgrade-box-content w-50 m-5 text-start">
                      <h1 className="m-0 p-0">Hello, Bagus!</h1>
                      <p className="fs-5">Welcome to spotify</p>
                      <button type="button" className="btn btn-upgrade-premium">Upgrade to Premium !</button>
                    </div>
                  </div>
                  <div
                    className="event"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                  </div>
                  <div
                    className="yourFavorite bg-primary"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                  </div>
                  <div
                    className="topTrending"
                    data-aos="fade-up"
                    data-aos-delay="1500"
                  >
                  </div>
                </div>
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
