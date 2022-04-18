// Libraries
import React from 'react';

// CSS
import './song.css';

// Components
import formatFromMinutesSecond from '../../utils/formatFromMinutesSecond';
import { setSelectedSong } from '../../redux/slices/songSlice';
import { useAppDispatch,useAppSelector } from '../../redux/hooks'
import { ItemSong } from "../../apiModel/searchSong";

type Props = {
  uri: string;
  index: number;
  data: ItemSong;
};

function Song({ uri, data, index }: Props) {
  
  const dispatch = useAppDispatch();
  const selectedSong = useAppSelector((state) => state.song.selectedSong);

  const generateButtonText = () => {
    const selected = selectedSong.findIndex((item: ItemSong) => item.uri === uri);
    if (selected !== -1) return 'Deselect';
    return 'Select';
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
    <div className="song mb-2 d-flex align-items-center">
      <div className="index">{index + 1}</div>
      <div className="song-title-col d-flex justify-content-start align-items-center">
        <div className="song-img"><img className="img-song" src={data.album.images[2].url} alt="Song Cover" /></div>
        <div className="song-detail">
          <p className="song-name m-0">{data.name}</p>
          <p className="song-artist m-0">{data.album.artists[0].name}</p>
        </div>
      </div>
      <div className="song-album">{data.album.name}</div>
      <div className="duration">{formatFromMinutesSecond(data.duration_ms)}</div>
      <div className="position-relative align-self-start mt-2">
        <button className="text-white btn btn-select-song position-absolute" type="button" onClick={handleSelect}>
          {generateButtonText()}
        </button>
      </div>
    </div>
  );
}

export default Song;