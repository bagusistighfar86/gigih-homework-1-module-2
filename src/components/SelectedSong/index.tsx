// Libraries
import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSelectedSong, getSelectedSong } from '../../redux/slices/songSlice';
import { ItemSong } from '../../apiModel/InterfaceSong';

type Props = {
  uri: string;
  index: number;
  data: ItemSong;
};

function SelectedSong({ index, uri, data }: Props) {
  const dispatch = useAppDispatch();

  const selectedSong = useAppSelector((state) => state.song.selectedSong);

  // eslint-disable-next-line react/no-unstable-nested-components
  function IconSelectedSong() {
    const selected = selectedSong.findIndex((item: ItemSong) => item.uri === uri);
    if (selected !== -1) return <CheckBoxIcon />;
    return '';
  }

  const handleSelectedSong = () => {
    const selected = selectedSong.findIndex((item: ItemSong) => item.uri === uri);
    if (selected > -1) {
      const newSelectedSongs = selectedSong.filter((item: ItemSong) => item.uri !== uri);
      dispatch(setSelectedSong(newSelectedSongs));
    } else {
      const newSelectedSongs = [...selectedSong, data];
      dispatch(setSelectedSong(newSelectedSongs));
    }
    return null;
  };

  useEffect(() => {
    dispatch(getSelectedSong());
  }, []);

  const useStyle = makeStyles({
    selectedSong: {
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
    },
    selectedSongIcon: {
      color: '#4caf50',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    songName: {
      '&&': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  });
  const classes = useStyle();
  return (
    <Box component="div" className={classes.selectedSong} mb={1}>
      <Typography variant="body2" className={classes.songName}>
        <Box component="span">
          {index + 1}
          .
        </Box>
        {index <= 9 && ' '}
        {data.name}
      </Typography>
      <Box
        className={classes.selectedSongIcon}
        onClick={handleSelectedSong}
      >
        {IconSelectedSong()}
      </Box>
    </Box>
  );
}

export default SelectedSong;
