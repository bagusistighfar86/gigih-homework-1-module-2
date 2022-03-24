import React, { useEffect } from "react";

const Album = ({ data }) => {
  useEffect(()=>{
    try{
      console.log(data);
      const imgAlbum = document.getElementById("img-album");
      const albumTitle = document.getElementById("album-title");
      const artistName = document.getElementById("artist-name");
      const releaseDate = document.getElementById("release-date");
      const totalTracks = document.getElementById("total-tracks");
  
      imgAlbum.src = data.album.images[1].url;
      albumTitle.innerText = data.album.name;
      artistName.innerText = data.artists[0].name;
      releaseDate.innerText = data.album.release_date;
      totalTracks.innerText = data.album.total_tracks;
    }
    catch(err){
      alert(err.message);
    }
  },[])
  
  return (
    <div className="track-info-album">
        <div className="album-img">
        <img id='img-album' src="#" />
        </div>
        <div className="album-detail text-white">
        <h3>Album</h3>
        <h1 id="album-title"></h1>
        <div className="artist-info">
            <p>Artist : <span id="artist-name"></span></p>
            <p>Release Date : <span id="release-date"></span></p>
            <p>Total Tracks : <span id="total-tracks"></span></p>
        </div>
        </div>
    </div>
  )
}

export default Album;