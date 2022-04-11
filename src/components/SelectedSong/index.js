// Libraries
import React from 'react';

// Components
import Song from '../Song/index';

function SelectedSong({ selectedSong, setSelected }) {
  return (
    <div className="SelectedSong">
      <h1 className="text-white">Selected Song</h1>
      <table className="table table-borderless text-white">
        <thead>
          {selectedSong.length !== 0 && (
            <tr>
              <th scope="col" className="pe-3">#</th>
              <th scope="col" colSpan={2}>Title</th>
              <th scope="col">Album</th>
              <th scope="col">Duration</th>
              <th scope="col">Select Song</th>
            </tr>
          )}
        </thead>
        <tbody>
          {selectedSong.map((item, index) => (
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

export default SelectedSong;
