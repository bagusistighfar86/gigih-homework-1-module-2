// Libraries
import React from 'react';

// CSS
import './RecommendedSong.css';

// Components
import songDummy from '../../songDummy';
import Song from '../Song/index';

function RecommendedSong({ selectedSong, setSelected }) {
  return (
    <div className="RecomendedSong">
      <h1 className="text-white">Recommended Songs</h1>
      <div className="header-table d-flex text-white">
        <p className="index">#</p>
        <p className="title">Title</p>
        <p className="album">Album</p>
        <p className="duration">Duration</p>
        <p className="selectSong">Select Song</p>
      </div>
      {songDummy.map((item, index) => (
        <Song
          key={item.id}
          index={index}
          uri={item.uri}
          data={item}
          selectedSong={selectedSong}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

export default RecommendedSong;
