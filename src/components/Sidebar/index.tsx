// Libraries
import React from 'react';

//  MaterialUI
import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Link, useLocation } from 'react-router-dom';
import SelectedSong from '../SelectedSong';
import { useAppSelector } from '../../redux/hooks';
import { ItemSong } from '../../apiModel/InterfaceSong';

const theme = createTheme();
const sideBarItem = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    path: '/home',
  },
  {
    text: 'Create Playlist',
    icon: <PlaylistAddIcon />,
    path: '/create-playlist',
  },
  {
    text: 'List Playlist',
    icon: <PlaylistPlayIcon />,
    path: '/list-playlist',
  },
  {
    text: 'Account',
    icon: <AccountCircleIcon />,
    path: '/account',
  },
  {
    text: 'Setting',
    icon: <SettingsIcon />,
    path: '/setting',
  },
];

type Props = {
  drawerWidth: number;
};

function Sidebar({ drawerWidth }: Props) {
  const location = useLocation();
  const selectedSong = useAppSelector((state) => state.song.selectedSong);

  const useStyle = makeStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '5px',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 14px 14px transparent',
        border: 'solid 4px transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        boxShadow: 'inset 0 0 14px 14px #bbbbbe',
        border: 'solid 4px transparent',
        backgroundColor: 'rgb(255 126 95 / 1)',
        outline: '0 solid slategrey',
        borderRadius: '20px',

      },
    },
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
        width: drawerWidth,
        fontWeight: 700,
        background: '#080808',
        overflow: 'hidden',
      },
    },
    sideBox: {
      height: 'fit-content',
    // backgroundColor: 'red',
    },
    list: {
      width: '100%',
      boxShadow: 'inset 0 0 0 0.1px rgb(255 126 95 / 0)',
      transition: 'box-shadow 0.3s 0.1s ease-in-out',
      '&:hover': {
        cursor: 'pointer',
        boxShadow: 'inset 500px 0 0 0 rgb(255 126 95 / 0.1)',
        '& .MuiListItemText-root': {
          color: 'white',
        },
        '& .MuiListItemIcon-root': {
          color: 'white',
        },
        '&$selected': {
          boxShadow: 'inset 500px 0 0 0 rgb(255 126 95 / 0.1)',
          '& .MuiListItemText-root': {
            color: 'white',
          },
          '& .MuiListItemIcon-root': {
            color: 'white',
          },
        },
      },
      '&$selected': {
        boxShadow: 'inset 500px 0 0 0 rgb(255 126 95 / 1)',
        '& .MuiListItemText-root': {
          color: 'white',
        },
        '& .MuiListItemIcon-root': {
          color: 'white',
        },
      },
    },
    listItem: {
      '&&': {
        color: '#505050',
      },
    },
    logoSpotify: {
      padding: theme.spacing(2),
      '&&': {
        fontWeight: 1000,
      },
    },
    selected: {},
    selectedList: {
      height: '500px',
      overflowY: 'scroll',
      scrollbarColor: 'yellow',
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
      <Box className={classes.sideBox}>
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
          {sideBarItem?.map((item) => (
            <div key={item.text}>
              <ListItem
                component={Link}
                to={item.path}
                selected={item.path === location.pathname}
                classes={{ root: classes.list, selected: classes.selected }}
              >
                <ListItemIcon className={classes.listItem}>{item.icon}</ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={item.text}
                  disableTypography
                />
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
      <Box component="div" px={2}>
        <Typography
          variant="h5"
          component="h1"
          mb={2}
          sx={{ fontWeight: '500', color: 'white' }}
        >
          Selected Song
        </Typography>
        <Box component="div" className={classes.selectedList}>
          {selectedSong?.map((item: ItemSong, index) => (
            <SelectedSong
              key={item.id}
              index={index}
              uri={item.uri}
              data={item}
            />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
