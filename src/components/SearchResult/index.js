// Libraries
import React from 'react';

// Components
import Song from '../Song/index';

function SearchResult({ selectedSong, setSelected, dataSearch }) {
  return (
    <div className="SearchResult mb-5">
      <h1 className="text-white">Search Result</h1>
      {dataSearch.length !== 0 && (
        <div className="header-table mb-3 d-flex text-white">
          <p className="index">#</p>
          <p className="title">Title</p>
          <p className="album">Album</p>
          <p className="duration">Duration</p>
          <p className="selectSong">Select Song</p>
        </div>
      )}
      <div className="songMap">
        {dataSearch.map((item, index) => (
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
    </div>
  );
}

export default SearchResult;
