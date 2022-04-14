// Material-UI
import { Box, Typography, Button } from '@mui/material';

// Libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import { setAccessToken } from '../../redux/slices/tokenSlice';
import 'aos/dist/aos.css';

// CSS
import './loginPage.css';

function LoginPage() {
  if (document.readyState === 'complete') {
    AOS.refresh();
  }

  window.addEventListener('load', AOS.refresh);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease',
    });
  }, []);

  const AUTH_URL = 'https://accounts.spotify.com/authorize';
  const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/';
  const scopes = 'user-read-private user-read-email playlist-modify-private user-library-read user-library-modify';
  const url = `${AUTH_URL}?client_id=${spotifyClientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;

  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.token.accessToken);

  const handleLogin = () => {
    window.location.replace(url);
  };

  useEffect(() => {
    if (accessToken) {
      history.push('/create-playlist');
    }
  }, [accessToken, history]);

  const accessTokenfromURL = window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split('&')[0]
    .split('=')[1];

  if (accessTokenfromURL) {
    dispatch(setAccessToken({ accessToken: accessTokenfromURL }));
    history.push({
      pathname: '/create-playlist',
    });
  }

  return (
    <Box
      className="loginPage"
      data-aos="fade-zoom-in"
      delay="0"
    >
      <Box className="loginContainer" sx={{ p: 0, width: '90%' }}>
        <Box
          className="whiteLogo"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img className="whiteLogoSpotify" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Logo Spotify" />
        </Box>
        <Box className="contents" sx={{ p: 0 }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 500, fontSize: 70, color: 'white' }}
            data-aos="fade-right"
            data-aos-delay="500"
          >
            WELCOME TO
          </Typography>
          <Typography
            className="spotify"
            variant="h2"
            sx={{ fontWeight: 'bold', fontSize: 140, lineHeight: 1 }}
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            SPOTIFY.
          </Typography>
          <Button
            className="loginButton"
            type="button"
            onClick={handleLogin}
            variant="contained"
            sx={{
              fontWeight: 'bold', fontSize: 20, py: 1, px: 9,
            }}
            data-aos="fade-right"
            data-aos-delay="1500"
          >
            LOGIN TO SPOTIFY
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
