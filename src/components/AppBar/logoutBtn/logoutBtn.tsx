// Libaries
import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from '../../../redux/hooks';
import { setRemoveAccessToken } from '../../../redux/slices/tokenSlice';

// CSS
import './logoutButton.css';

function LogoutButton() {
  const dispatch = useAppDispatch();
  const useStyle = makeStyles({
    logOutBtn: {
      '&&': {
        background: '#e53935',
        '&:hover': {
          background: '#b71c1c',
        },
      },
    },
  });

  const classes = useStyle();

  return (
    <div className="Logout text-end">
      <Button
        className={classes.logOutBtn}
        variant="contained"
        type="button"
        onClick={() => {
          dispatch(setRemoveAccessToken());
        }}
      >
        logout
      </Button>
    </div>
  );
}

export default LogoutButton;
