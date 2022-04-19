// Libraries
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { ItemSong } from '../../apiModel/InterfaceSong';

// CSS
import './searchResult.css';

// Components
import Song from '../Song/index';

function SearchResult() {
  const dataSearch = useAppSelector((state) => state.search.dataSearch);

  return (
    <div className="SearchResult mb-5">
      {dataSearch && (
        dataSearch.length !== 0 && (
          <>
            <h1 className="text-white">Search Result</h1>
            <div className="header-table mb-3 d-flex text-white">
              <p className="index text-center">#</p>
              <p className="title">Title</p>
              <p className="album">Album</p>
              <p className="duration">Duration</p>
              <p className="selectSong">Select Song</p>
            </div>
            <div className="songMap">
              {dataSearch.map((item: ItemSong, index) => (
                <Song
                  key={item.id}
                  index={index}
                  uri={item.uri}
                  data={item}
                />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}

export default SearchResult;
