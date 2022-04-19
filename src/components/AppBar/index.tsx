/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import {
  AppBar, Avatar, Toolbar, Box, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/index';
import LogoutButton from './logoutBtn/logoutBtn';
import { useAppSelector } from '../../redux/hooks';

type Props = {
  drawerWidth: number
}

interface userDataInterface {
    [display_name: string]: any
}

function Navbar({ drawerWidth }: Props) {
  const useStyle = makeStyles({
    rightApp: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    helloName: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    Account: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(to right, rgb(255 126 95 / 0) 0%, rgb(254 180 123 / 0)  51%, rgb(255 126 95 / 0)  100%)',
      boxShadow: '0 0 2px #eee',
      backgroundSize: '200% auto',
      borderRadius: '40px',
      color: 'rgb(255 126 95 / 1)',
      textDecoration: 'none',
      transition: 'background 0.5s ease',
      '&:hover': {
        color: 'white',
        cursor: 'pointer',
        backgroundPosition: 'right center',
        backgroundImage: 'linear-gradient(to right, rgb(255 126 95 / 1) 0%, rgb(254 180 123 / 1)  51%, rgb(255 126 95 / 1)  100%)',
      },
    },
  });

  const classes = useStyle();

  const accessToken = useAppSelector((state) => state.token.accessToken);
  const [userData, setUserData] = useState<userDataInterface>({});

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`https://api.spotify.com/v1/me?access_token=${accessToken}`);
        if (res) {
          console.log(res.data.images[0].url);
          localStorage.setItem('userData', JSON.stringify(res.data));
          setUserData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
      return null;
    };
    getUserData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // }, []);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        display: 'flex',
        backgroundColor: '#181818',
        height: 70,
      }}
    >
      <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
        <SearchBar />
        <Box component="div" className={classes.rightApp}>
          <Box
            className={classes.Account}
            component={Link}
            to="/account"
            mx={2}
            pl={3}
          >
            <Box component="div" className={classes.helloName} mr={2}>
              <Typography sx={{ fontWeight: 700 }}>
                {userData.display_name}
              </Typography>
            </Box>
            <Avatar alt={userData.display_name} src={userData.images?.[0].url} />
          </Box>
          <LogoutButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
