import { AppBar, Toolbar, Box } from '@mui/material';

import { makeStyles } from '@mui/styles';
import React from 'react';

import Sidebar from '../Sidebar';

import SearchBar from '../SearchBar/index';

const useStyle = makeStyles({
  root: {
    display: 'flex',

  },
  page: {
    width: '100%',
  },
});

const drawerWidth = 240;

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props) {
  const classes = useStyle();
  return (
    <Box component="div" className={classes.root}>
      {/* Appbar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          display: 'flex',
          backgroundColor: '#181818',
          height: 70,
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ width: '100%', justifyContent: 'center' }}>
          <SearchBar />
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />
      <div className={classes.page}>
        <Toolbar />
        { children }
      </div>
    </Box>
  );
}

export default Layout;
