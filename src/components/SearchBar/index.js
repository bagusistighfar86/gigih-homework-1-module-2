// Libraries
import React from 'react';

// CSS
import './searchBar.css';

function Search({ search, handleSubmit, handleChangeSearch }) {
  return (
    <div className="search-bar">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Artist, songs, playlist, others"
          name="txt"
          value={search}
          onChange={handleChangeSearch}
        />
      </form>
    </div>
  );
}

export default Search;
