// Libraries
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// CSS
import './ListPlaylist.css';

// Components
import { useAppSelector } from '../../redux/hooks';
import Playlist from '../../components/Playlist';
import { PlaylistItem } from '../../typeInterface/InterfacePlaylist';

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
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease',
      delay: 0,
    });
  }, []);

  return (
    <div
      className="ListPlaylist mb-5"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="row headerListPlaylist justify-content-between">
        <div className="col-2">
          <h1 className="text-white">List Playlist</h1>
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
