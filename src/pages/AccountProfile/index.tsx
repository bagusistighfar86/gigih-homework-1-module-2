/* eslint-disable no-eval */
import React, { useEffect } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import date from '../../utils/randomBirthDate';
import convertCountryCode from '../../utils/convertCountryCode';

function Account() {
  const userData = localStorage.getItem('userData');
  const userDataProfile = userData !== null && JSON.parse(userData);
  console.log(userDataProfile);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease',
      delay: 0,
    });
  }, []);

  const useStyle = makeStyles({
    userContainer: {
      display: 'flex',
      '& .MuiTypography-h1': {
        fontSize: 50,
        fontWeight: 500,
      },
      color: 'white',
      width: '100%',
    },
    avatarProfile: {
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      flexBasis: '20%',
      '& .MuiAvatar-root': {
        width: '250px',
        height: '250px',
      },
    },
    textContainer: {
      width: '100%',
    },
    userDetail: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      '& .MuiTypography-body2': {
        fontSize: 18,
        marginBottom: '20px',
      },
    },
    labelData: {
      color: '#9e9e9e',
      flexBasis: '25%',
    },
    contentData: {
      flexBasis: '50%',
    },
  });

  const classes = useStyle();

  return (
    <Box
      component="div"
      className={classes.userContainer}
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <Box component="div" className={classes.avatarProfile}>
        <Avatar
          alt={userDataProfile.display_name}
          src={userDataProfile.images?.[0].url}
        />
      </Box>

      <Box component="div" className={classes.textContainer} ml={5}>
        <Typography variant="h1" mb={2}>
          User Profile
        </Typography>
        <Box component="div" className={classes.userDetail}>
          <Box component="div" className={classes.labelData}>
            <Typography variant="body2">
              User Profile
            </Typography>
            <Typography variant="body2">
              Email
            </Typography>
            <Typography variant="body2">
              Date of Birth
            </Typography>
            <Typography variant="body2">
              Country
            </Typography>
          </Box>
          <Box component="div" className={classes.contentData}>
            <Typography variant="body2">
              {userDataProfile.display_name}
            </Typography>
            <Typography variant="body2">
              {userDataProfile.email}
            </Typography>
            <Typography variant="body2">
              {date}
            </Typography>
            <Typography variant="body2">
              {convertCountryCode(userDataProfile.country)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Account;
