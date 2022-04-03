const Song = ({ uri, data,  selectedSong, setSelected }) => {
  const generateButtonText = () => {
        const selected = selectedSong.findIndex((data) => data.uri === uri)
        if (selected !== -1) return 'Deselect'
        return 'Select'
    }

    const handleSelect = () => {
        const selected = selectedSong.findIndex((data) => data.uri === uri)
        if (selected > -1) {
            const newSelectedSongs = selectedSong.filter((data) => data.uri !== uri)
            setSelected(newSelectedSongs)
        } else {
            const newSelectedSongs = [...selectedSong,data]
            setSelected(newSelectedSongs)
        }
    }

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
        <button className="text-white" type="button" onClick={handleSelect} >
          {generateButtonText()}
        </button>
      </a>
    </div>
  )
}

export default Song;