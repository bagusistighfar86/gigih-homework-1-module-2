const Album = ({ data }) => {
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
          <button className="btn btn-select-playlist text-white" type="button">
            Select Album
          </button>
        </a>
      </div>
    </div>
  )
}

export default Album;