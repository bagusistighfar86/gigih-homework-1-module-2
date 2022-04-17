// Libraries
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// CSS
import './ListPlaylist.css';

// Components
import { useSelector } from 'react-redux';
import Playlist from '../Playlist';

function ListPlaylist() {
  const accessToken = useSelector((state) => state.token.accessToken);

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
        {playlistsData.map((item) => (
          // console.log(item)
          item.tracks.total >= 0 && (
          <Playlist
            key={item.id}
            data={item}
            accessToken={accessToken}
          />
          )
        ))}
      </div>
    </div>
  );
}

export default ListPlaylist;
