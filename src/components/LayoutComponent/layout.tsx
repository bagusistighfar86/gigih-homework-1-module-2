import { Toolbar, Box } from '@mui/material';

import { makeStyles } from '@mui/styles';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Navbar from '../AppBar';
import SearchResult from '../SearchResult';
import Sidebar from '../Sidebar';

const drawerWidth = 240;

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props) {
  const useStyle = makeStyles({
    root: {
      display: 'flex',
      // background: 'rgb(31,31,31)',
      height: '100vh',
    },
    page: {
      background: 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(8,8,8,1) 100%);',
      width: '100%',
      overflowY: 'scroll',
    },
  });

  const classes = useStyle();
  const search = useAppSelector((state) => state.search.search);
  console.log('search', search);
  return (
    <Box component="div" className={classes.root}>
      {/* Appbar */}
      <Navbar drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="div" className={classes.page} py={5} px={3}>
        <Toolbar />
        {search === '' ? children : <SearchResult />}
      </Box>
    </Box>
  );
}

export default Layout;
