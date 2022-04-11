// Libraries
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

// CSS
import './playlist.css';

function Playlist({ selectedSong, setSelected, data }) {
  const accessToken = useSelector((state) => state.token.accessToken);

  const addSongsToPlaylist = async (playlistId) => {
    try {
      const res = await axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?access_token=${accessToken}`, {
        uris: selectedSong.map((song) => song.uri),
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  const handleAddSongtoPlaylist = async (e) => {
    e.preventDefault();
    try {
      const playlistId = data.id;
      if (playlistId) {
        if (selectedSong !== []) {
          const res = await addSongsToPlaylist(playlistId);
          if (res) {
            console.log('BerhasilUpload');
            setSelected([]);
            alert(`Song has been added to playlist ${data.name}`);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-playlist col-1 p-0 text-white">
      <div className="card-head w-100 d-flex">
        <div className="card-head-img mx-auto align-self-center">
          {data.images.length !== 0
            ? (<img src={data.images[0].url} className="card-img-top" alt="playlist-cover" />)
            : (
              <img
                src="https://cdn5.vectorstock.com/i/1000x1000/91/59/music-note-line-icon-on-black-background-black-vector-26849159.jpg"
                className="card-img-top"
                alt="playlist-cover"
              />
            )}
        </div>
      </div>

      <div className="card-body p-3">
        <h5 className="playlist-title">{data.name}</h5>
        <p className="display-name">
          By
          {data.owner.display_name}
        </p>
        <button className="btn btn-add-to-playlist text-white" type="button" onClick={handleAddSongtoPlaylist}>
          Add to Playlist +
        </button>
      </div>
    </div>
  );
}

export default Playlist;
