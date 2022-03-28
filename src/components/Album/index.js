import React, { useEffect } from "react";

const Album = ({ data }) => {
  useEffect(() => {
    try {
      console.log(data);
      // const imgAlbum = document.getElementById("img-album");
      // const albumTitle = document.getElementById("album-title");
      // const artistName = document.getElementById("artist-name");
      // const releaseDate = document.getElementById("release-date");
      // const totalTracks = document.getElementById("total-tracks");

      // imgAlbum.src = data.album.images[1].url;
      // albumTitle.innerText = data.album.name;
      // artistName.innerText = data.artists[0].name;
      // releaseDate.innerText = data.album.release_date;
      // totalTracks.innerText = data.album.total_tracks;
    }
    catch (err) {
      alert(err.message);
    }
  }, [])

  return (
    <div className="track-info-album">
      <div className="album-img">
        <img id='img-album' src={data.album.images[1].url} />
      </div>
      <div className="album-detail text-white">
        <h3>Album</h3>
        <h1 id="album-title">{data.name}</h1>
        <div className="album-info">
          <p>Artist : <span id="artist-name">{data.album.artists[0].name}</span></p>
          <p>Release Date : <span id="release-date">{data.album.release_date}</span></p>
          <p>Total Tracks : <span id="total-tracks">{data.album.total_tracks}</span></p>
        </div>
        <a href="#">
          <button class="btn btn-select-playlist text-white" type="button">
            Select Album
          </button>
        </a>
      </div>
    </div>
  )
}

export default Album;