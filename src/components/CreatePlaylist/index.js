// Libraries
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSong } from '../../redux/slices/songSlice';

// CSS
import './createPlaylist.css';

function CreatePlaylist() {
  const dispatch = useDispatch();
  const selectedSong = useSelector((state) => state.song.selectedSong);
  const accessToken = useSelector((state) => state.token.accessToken);

  const [playlistForm, setPlaylistForm] = useState({
    title: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    title: false,
  });

  useEffect(() => {
    if (playlistForm.title.length === 0) { return; }
    if (playlistForm.title.length >= 10) {
      setErrors({ ...errors, title: false });
    }
    if (playlistForm.title.length < 10) {
      setErrors({ ...errors, title: true });
    }
  }, [playlistForm]);

  async function getUserData() {
    try {
      const res = await axios.get(`https://api.spotify.com/v1/me?access_token=${accessToken}`);
      if (res) {
        console.log(res.data);
        return res?.data?.id;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  }

  const createPlaylist = async (userId) => {
    try {
      const res = await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists?access_token=${accessToken}`, {
        name: playlistForm.title,
        public: false,
        collaborative: false,
        description: playlistForm.description,
      });
      if (res) {
        console.log(res.data);
        return res?.data?.id;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  const addSongsToPlaylist = async (playlistId) => {
    try {
      console.log(playlistId);
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

  const handleChangeForm = (e) => {
    setPlaylistForm({
      ...playlistForm, [e.target.name]: e.target.value,
    });
    console.log({ ...playlistForm, [e.target.name]: e.target.value });
  };

  const handleSubmitPlaylist = async (e) => {
    e.preventDefault();
    try {
      const userId = await getUserData();
      const playlistId = await createPlaylist(userId);
      if (playlistId) {
        if (selectedSong !== []) {
          // eslint-disable-next-line no-unused-vars
          const res = await addSongsToPlaylist(playlistId);
        }
        const res = playlistId;
        if (res) {
          console.log('BerhasilUpload');

          setPlaylistForm({
            title: '',
            description: '',
          });
          dispatch(setSelectedSong([]));
          alert('Playlist is created!');
        }
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  };

  return (
    <div
      className="CreatePlaylist pe-3"
      data-aos="fade-up"
      data-aos-delay="2000"
    >
      <h1 className="text-white">Create Playlist</h1>
      <form onSubmit={handleSubmitPlaylist}>
        <div className="form-group">
          <label htmlFor="title" className="text-white">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter playlist tittle" onChange={handleChangeForm} />
          {errors.title && <p className="error-title-msg text-danger">Minimum 10 huruf</p>}
        </div>
        <div className="form-group">
          <label htmlFor="description" className="text-white">Description</label>
          <input type="text" id="description" name="descriptions" placeholder="Enter playlist description" onChange={handleChangeForm} />
        </div>
        <button className="btn btn-create-playlist text-white" type="submit">
          Create Playlist
        </button>
      </form>
    </div>
  );
}

export default CreatePlaylist;
