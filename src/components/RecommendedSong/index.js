// Libraries
import React from 'react';

// CSS
import './RecommendedSong.css';

// Components
import songDummy from '../../songDummy';
import Song from '../Song/index';

function RecommendedSong({ selectedSong, setSelected }) {
  return (
    <div className="CreatePlaylist">
      <h1 className="text-white">Recommended Songs</h1>
      <table className="table table-borderless text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" colSpan={2}>Title</th>
            <th scope="col">Album</th>
            <th scope="col">Duration</th>
            <th scope="col">Select Song</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

export default RecommendedSong;
