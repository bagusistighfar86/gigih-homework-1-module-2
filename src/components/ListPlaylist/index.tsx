// Libraries
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// CSS
import './ListPlaylist.css';

// Components
import { useAppSelector } from '../../redux/hooks';
import Playlist from '../Playlist';
import { PlaylistItem } from '../../apiModel/InterfacePlaylist';

function ListPlaylist() {
  const accessToken = useAppSelector((state) => state.token.accessToken);
  const selectedSong = useAppSelector((state) => state.song.selectedSong);

  console.log('ListPlaylist Selected', selectedSong);

  const [playlistsData, setPlaylists] = useState([]);

  const getListPlaylist = async () => {
    try {
      const res = await axios.get(`https://api.spotify.com/v1/me/playlists?limit=50&access_token=${accessToken}`);
      if (res) {
        console.log(res.data);
        setPlaylists(res.data.items);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListPlaylist();
  }, [setPlaylists]);

  return (
    <div className="ListPlaylist mb-5">
      <div className="row headerListPlaylist justify-content-between">
        <div className="col-2">
          <h1 className="text-white">List Playlist</h1>
        </div>
        <div className="col-2 text-end pe-4">
          <button className="btn btn-get-playlist text-white" type="button" onClick={getListPlaylist}>
            Get Playlist
          </button>
        </div>
      </div>
      <div className="row playlistMap">
        {playlistsData?.map((item: PlaylistItem) => (
          // console.log(item)
          item.tracks.total >= 0 && (
          <Playlist
            key={item.id}
            data={item}
          />
          )
        ))}
      </div>
    </div>
  );
}

export default ListPlaylist;
