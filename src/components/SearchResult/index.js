// Libraries
import React from 'react';

// Components
import Song from '../Song/index';

function SearchResult({ selectedSong, setSelected, dataSearch }) {
  return (
    <div className="SearchResult">
      <h1 className="text-white">Search Result</h1>
      <table className="table table-borderless text-white">
        <thead>
          {dataSearch.length !== 0 && (
            <tr>
              <th scope="col">#</th>
              <th scope="col" colSpan={2}>Title</th>
              <th scope="col">Album</th>
              <th scope="col">Duration</th>
              <th scope="col">Select Song</th>
            </tr>
          )}
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

export default SearchResult;
