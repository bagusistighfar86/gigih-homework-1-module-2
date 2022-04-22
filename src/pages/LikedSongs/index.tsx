import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLikedSong, getLikedSong } from '../../redux/slices/songSlice';
import LikedSongList from './likedSongList';

function LikedSongs() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const accessToken = useAppSelector((state) => state.token.accessToken);
  const likedSong = useAppSelector((state) => state.song.likedSong);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1500,
  //     easing: 'ease',
  //     delay: 0,
  //   });
  // }, []);

  const getListLikedSong = async () => {
    try {
      const res = await axios.get(`https://api.spotify.com/v1/me/tracks?limit=50&access_token=${accessToken}`);
      if (res && likedSong.length === 0) {
        console.log(res.data.items);
        dispatch(setLikedSong(res.data.items));
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  useEffect(() => {
    console.log('likedSongData', likedSong);
    // if (likedSong.length === 0) {
    getListLikedSong();
    // }
  }, []);

  useEffect(() => {
    dispatch(getLikedSong());
  }, []);

  const useStyle = makeStyles({
    settingContainer: {
      '& .MuiTypography-h1': {
        fontSize: 50,
        fontWeight: 500,
        color: 'white',
      },
      '& .MuiTypography-body2': {
        fontSize: 20,
        color: '#f44336',
      },
      width: '100%',
    },
    headerTable: {
      display: 'flex',
      borderBottom: '2px solid #3d3d3d',
      color: 'white',
    },
    index: {
      textAlign: 'center',
      flexBasis: '50px',
    },
    songTitle: {
      flexBasis: '460px',
    },
    songAlbum: {
      flexBasis: '700px',
    },
    dataAdded: {
      textAlign: 'center',
      flexBasis: '120px',
    },
    duration: {
      textAlign: 'center',
      flexBasis: '150px',
    },
  });
  const classes = useStyle();

  return (
    <Box
      component="div"
      className={classes.settingContainer}
      // data-aos="fade-up"
      // data-aos-delay="0"
    >
      <Typography variant="h1" mb={2}>
        <FavoriteTwoToneIcon sx={{ fontSize: '60px' }} />
        {' '}
        Liked Songs
      </Typography>

      <Box className={classes.headerTable} pb={1} my={2}>
        <Typography className={classes.index}>#</Typography>
        <Typography className={classes.songTitle}>Title</Typography>
        <Typography className={classes.songAlbum}>Album</Typography>
        <Typography className={classes.dataAdded}>Data Added</Typography>
        <Typography className={classes.duration}>Duration</Typography>
        <Typography>Select Song</Typography>
      </Box>
      <Box component="div">
        {likedSong.map((item, index) => (
          <LikedSongList
            key={item.track.id}
            index={index}
            ids={item.track.id}
            data={item}
          />
        ))}
      </Box>
    </Box>
  );
}

export default LikedSongs;
