/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
// Libraries
import React from 'react';

// CSS
import './home.css';

// Material UI
// import { Box, Typography } from '@mui/material';

import guitarBoy from '../../assets/img/guitar-boy.png';
import CreatePlaylist from '../../components/CreatePlaylist';
import ListPlaylist from '../../components/ListPlaylist';
import SearchResult from '../../components/SearchResult';
import SelectedSong from '../../components/SelectedSong/index';
import RecommendedSong from '../../components/RecommendedSong';

function Home() {
  return (
  // <Box component="div">
  //   <Typography>
  //     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    //     The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    //   </Typography>
    // </Box>
    <div className="home">
      <div className="content ps-3 pe-3" style={{ height: '100vh' }}>
        <div className="main-header reveal">
          <div
            className="upgrade-box bg-danger text-white d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="upgrade-box-img w-50">
              <img
                src={guitarBoy}
                alt="guitarBoy"
                className="guitarBoy"
                width="500px"
                height="500px"
              />
            </div>
            <div className="upgrade-box-content w-50 m-5 text-start">
              <h1 className="m-0 p-0">Hello, Bagus!</h1>
              <p className="fs-5">Welcome to spotify</p>
              <button
                type="button"
                className="btn btn-upgrade-premium"
              >
                Upgrade to Premium !
              </button>
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
        <CreatePlaylist />
        <ListPlaylist />
        <SelectedSong />
        <SearchResult />
        <RecommendedSong />
      </div>
    </div>
  );
}

export default Home;
