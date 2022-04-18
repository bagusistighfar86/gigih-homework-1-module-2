import { makeStyles } from '@mui/styles';

// Assets
import loginPageBG from '../../assets/img/loginPage.jpg'; // Import using relative path

const useStyles = makeStyles({
  loginPage: {
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `url(${loginPageBG})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  loginContainer: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    position: 'relative',
  },
  whiteLogo: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: '50px',
    right: 0,
  },
  spotifyText: {
    background: 'linear-gradient(69.05deg, #DC7866 2.77%, #F4D19A 94.45%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  loginButton: {
    background: 'linear-gradient(69deg, rgba(220,120,102,1) 2.77%, rgba(244,209,154,1) 94.45%)',
    transition: 'all ease 0.5s linear',
    '&:hover': {
      background: 'linear-gradient(-69deg, rgba(220,120,102,1) 2.77%, rgba(244,209,154,1) 94.45%)',
      cursor: 'pointer',
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export { useStyles };
