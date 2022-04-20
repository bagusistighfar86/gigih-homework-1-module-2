// Libraries
import React from 'react';

// CSS
import './song.css';

// Components
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import formatFromMinutesSecond from '../../utils/formatFromMinutesSecond';
import { setSelectedSong } from '../../redux/slices/songSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ItemSong } from '../../apiModel/InterfaceSong';

type Props = {
  uri: string;
  index: number;
  data: ItemSong;
};

function Song({ uri, data, index }: Props) {
  const dispatch = useAppDispatch();
  const selectedSong = useAppSelector((state) => state.song.selectedSong);

  const generateButtonSelect = () => {
    const selected = selectedSong.findIndex((item: ItemSong) => item.uri === uri);
    if (selected !== -1) return <HighlightOffIcon className="deselectIcon" sx={{ fontSize: '40px' }} />;
    return <CheckCircleOutlineIcon className="selectIcon" sx={{ fontSize: '40px' }} />;
  };

  const handleSelect = () => {
    const selected = selectedSong.findIndex((item: ItemSong) => item.uri === uri);
    if (selected > -1) {
      const newSelectedSongs = selectedSong.filter((item: ItemSong) => item.uri !== uri);
      dispatch(setSelectedSong(newSelectedSongs));
    } else {
      const newSelectedSongs = [...selectedSong, data];
      dispatch(setSelectedSong(newSelectedSongs));
    }
  };

  return (
    <div className="song text-white mb-2 d-flex align-items-center">
      <div className="index text-center">{index + 1}</div>
      <div className="song-title-col d-flex justify-content-start align-items-center">
        <div className="song-img"><img className="img-song" src={data.album.images[2].url} alt="Song Cover" /></div>
        <div className="song-detail">
          <p className="song-name m-0">{data.name}</p>
          <p className="song-artist m-0">{data.album.artists[0].name}</p>
        </div>
      </div>
      <div className="song-album">{data.album.name}</div>
      <div className="duration px-3">{formatFromMinutesSecond(data.duration_ms)}</div>
      <button type="button" className="btn-select-song px-4" onClick={handleSelect}>
        {generateButtonSelect()}
      </button>
      {/* <button className="btn-select-song" type="button" onClick={handleSelect}>
        {generateButtonSelect()}
      </button> */}
    </div>
  );
}

export default Song;
