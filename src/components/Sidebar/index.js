// Libraries
import React from 'react';

//  MaterialUI
import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme } from '@mui/system';
import { makeStyles } from '@mui/styles';

const theme = createTheme();
const sideBarItem = [
  {
    text: 'Home',
    icon: <HomeIcon color="primary" />,
    path: '/home',
  },
  {
    text: 'Create Playlist',
    icon: <PlaylistPlayIcon color="primary" />,
    path: '/create-playlist',
  },
  {
    text: 'Account',
    icon: <AccountCircleIcon color="primary" />,
    path: '/account',
  },
  {
    text: 'Setting',
    icon: <SettingsIcon color="primary" />,
    path: '/setting',
  },
];

function Sidebar({ drawerWidth }) {
  const useStyle = makeStyles({
    root: {
      display: 'flex',
    },
    page: {
      width: '100%',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      '&&': {
        color: 'white',
        width: drawerWidth,
        fontWeight: 700,
        background: '#080808',
      },
    },
    navBox: {
      height: 'fit-content',
    // backgroundColor: 'red',
    },
    ListItemIcon: {
      '&&': {
        minWidth: 40,
      },
    },
    logoSpotify: {
      padding: theme.spacing(2),
      '&&': {
        fontWeight: 1000,
      },
    },
    selectedSong: {
      height: '100px',
    // backgroundColor: 'blue',
    },
  });

  const classes = useStyle();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      sx={{ backgroundColor: '#080808' }}
    >
      <Box className={classes.navBox}>
        <Box
          component="img"
          className={classes.logoSpotify}
          sx={{
            height: 80,
          }}
          alt="Logo Spotify"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        />
        <List>
          {sideBarItem.map((item) => (
            <ListItem key={item.text}>
              <ListItemIcon className={classes.ListItemIcon}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                disableTypography
                className={classes.drawerPaper}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className={classes.selectedSong}></Box>
    </Drawer>
  );
}

export default Sidebar;
