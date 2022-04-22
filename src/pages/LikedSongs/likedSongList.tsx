// Libraries
import React from 'react';

// CSS
import './likedSongList.css';

// Components
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import formatFromMinutesSecond from '../../utils/formatFromMinutesSecond';
import { RootObject } from '../../typeInterface/InterfaceLikedSong';
import dateToString from '../../utils/dateToString';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLikedSong } from '../../redux/slices/songSlice';

type Props = {
  ids: string,
  index: number,
  data: RootObject,
};

function LikedSongList({ ids, data, index }: Props) {
  const accessToken = useAppSelector((state) => state.token.accessToken);
  const likedSong = useAppSelector((state) => state.song.likedSong);
  const dispatch = useAppDispatch();

  const removeLikedSong = async () => {
    try {
      await axios.delete(`https://api.spotify.com/v1/me/tracks?ids=${ids}&access_token=${accessToken}`);
      const newLikedSong = likedSong.filter((item: RootObject) => item.track.id !== ids);
      // console.log('newLiked', likedSong);
      dispatch(setLikedSong(newLikedSong));
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  return (
    <div className="song text-white mb-2 d-flex align-items-center">
      <div className="index text-center">{index + 1}</div>
      <div className="song-title-col d-flex justify-content-start align-items-center">
        <div className="song-img"><img className="img-song" src={data.track.album.images[2].url} alt="Song Cover" /></div>
        <div className="song-detail">
          <p className="song-name m-0">{data.track.name}</p>
          <p className="song-artist m-0">{data.track.artists[0].name}</p>
        </div>
      </div>
      <div className="song-album">{data.track.album.name}</div>
      <div className="data-added">{dateToString(data.added_at)}</div>
      <div className="duration px-3">{formatFromMinutesSecond(data.track.duration_ms)}</div>
      <button type="button" className="btn-select-song px-4" onClick={removeLikedSong}>
        <FavoriteIcon className="selectIcon" sx={{ fontSize: '30px' }} />
        ;
      </button>
    </div>
  );
}

export default LikedSongList;
