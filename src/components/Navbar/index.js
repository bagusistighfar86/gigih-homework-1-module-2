// Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// CSS
import './navbar.css';

// Components
import Search from '../SearchBar/index';
import LogoutButton from './Logout/logoutBtn';

function Navbar({ search, handleSubmit, handleChangeSearch }) {
  const accessToken = useSelector((state) => state.token.accessToken);

  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="leftNav col-2">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              alt="Logo Spotify"
            />
          </div>
          <div className="middleNav col-5">
            <Search
              search={search}
              handleChangeSearch={handleChangeSearch}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="rightNav col-5">
            {accessToken
              ? (<LogoutButton />)
              : ('')}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
