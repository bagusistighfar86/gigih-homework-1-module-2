import axios from "axios"

const Playlist = ({ selectedSong, setSelected, data, accessToken }) => {

    const addSongsToPlaylist = async (playlistId) => {
        try {
            console.log(playlistId)
            const res = await axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?access_token=${accessToken}`, {
                uris: selectedSong.map((song) => song.uri)
            })
            console.log(res)
            return res
        } catch (err) {
            console.log(err)
        }
    }

    const handleAddSongtoPlaylist = async (e) => {
        e.preventDefault();
        try {
            const playlistId = data.id
            if (playlistId) {
                if(selectedSong !== []){
                    const res = await addSongsToPlaylist(playlistId)
                    if (res) {
                        console.log("BerhasilUpload")
                        setSelected([])
                        alert('Song has been added to playlist ' + data.name)
                    }       
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="playlist-list">
            <div className="playlist-detail text-white">
                <h3 id="playlist-title">{data.name}</h3>
                <p id="artist-name"><span id="display-name">By {data.owner.display_name}</span>{data.description !== "" &&  " - " + data.description}</p>
            </div>
            <a className="btn btn-select-playlist">
                <button className="text-white" type="button" onClick={handleAddSongtoPlaylist}>
                    Add to Playlist +
                </button>
            </a>
        </div>
    )
}

export default Playlist