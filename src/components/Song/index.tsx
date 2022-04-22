// Libraries
import React from 'react';

// CSS
import './song.css';

// Components
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import formatFromMinutesSecond from '../../utils/formatFromMinutesSecond';
import { setLikedSong, setSelectedSong } from '../../redux/slices/songSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ItemSong } from '../../typeInterface/InterfaceSong';
import { RootObject } from '../../typeInterface/InterfaceLikedSong';

type Props = {
  uri: string
  index: number
  ids: string
  data: ItemSong
};

function Song({
  uri, data, index, ids,
}: Props) {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.token.accessToken);
  const selectedSong = useAppSelector((state) => state.song.selectedSong);
  const likedSong = useAppSelector((state) => state.song.likedSong);

  const addChooseLikedSong = {
    added_at: '',
    track: {},
  };

  const addLikedSong = async () => {
    try {
      await axios.put(`https://api.spotify.com/v1/me/tracks?ids=${ids}&access_token=${accessToken}`);
      console.log('data', data);
      const addedAt = new Date();
      addChooseLikedSong.added_at = addedAt.toISOString();
      addChooseLikedSong.track = data;
      dispatch(setLikedSong([...likedSong, addChooseLikedSong]));
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  const removeLikedSong = async () => {
    try {
      await axios.delete(`https://api.spotify.com/v1/me/tracks?ids=${ids}&access_token=${accessToken}`);
      // console.log('newLiked', likedSong);
      const newLikedSong = likedSong.filter((item: RootObject) => item.track.uri !== uri);
      dispatch(setLikedSong(newLikedSong));
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  const generateButtonSelect = () => {
    const selected = selectedSong.findIndex((item: ItemSong) => item.uri === uri);
    if (selected === -1) return <CheckCircleOutlineIcon className="selectIcon" sx={{ fontSize: '30px' }} />;
    return <HighlightOffIcon className="deselectIcon" sx={{ fontSize: '30px' }} />;
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

  const handleLiked = () => {
    const selected = likedSong.findIndex((item: RootObject) => item.track.uri === uri);
    if (selected > -1) {
      removeLikedSong();
    } else {
      addLikedSong();
    }
  };

  const generateButtonLiked = () => {
    const selected = likedSong.findIndex((item: RootObject) => item.track.uri === uri);
    if (selected === -1) return <FavoriteBorderIcon className="deselectIcon" sx={{ fontSize: '30px' }} />;
    return <FavoriteIcon className="selectIcon" sx={{ fontSize: '30px' }} />;
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
      <button type="button" className="btn-song-liked px-4" onClick={handleLiked}>
        {generateButtonLiked()}
      </button>
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
