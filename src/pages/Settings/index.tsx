import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Settings() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease',
      delay: 0,
    });
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
  });

  const classes = useStyle();

  return (
    <Box
      component="div"
      className={classes.settingContainer}
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <Typography variant="h1" mb={2}>
        Settings
      </Typography>

      <Typography variant="body2">
        This feature will be soon.
      </Typography>
    </Box>
  );
}

export default Settings;
