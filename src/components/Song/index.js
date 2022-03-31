import React, { useEffect } from "react";

const Song = ({ data }) => {
  return (
    <div className="song-list">
      <div className="song-img">
        <img id='img-song' src={data.album.images[2].url} />
      </div>
      <div className="song-detail text-white">
        <h3 id="song-title">{data.name}</h3>
        <p id="artist-name">{data.album.artists[0].name}</p>
      </div>
      <a className="btn btn-select-song" href="#">
        <button className="text-white" type="button">
          Select
        </button>
      </a>
    </div>
  )
}

export default Song;