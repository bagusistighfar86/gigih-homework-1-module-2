import axios from 'axios';
import { useState, useEffect } from 'react';
import Playlist from '../Playlist';
import { useSelector } from "react-redux";

const ListPlaylist = ({ selectedSong, setSelected }) => {
    const accessToken = useSelector (state => state.auth.accessToken)
    
    const [playlistsData, setPlaylists] = useState([])

    const getListPlaylist = async () => {
        try {
            const res = await axios.get(`https://api.spotify.com/v1/me/playlists?access_token=${accessToken}`)
            if (res) {
                console.log(res.data)
                setPlaylists(res.data.items)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getListPlaylist()
    }, []);

    return (
        <div className="ListPlaylist home-section">
            <div className='headerListPlaylist'>
                <h1 className="text-white">List Playlist</h1>
                <a className="btn btn-get-playlist">
                    <button className="text-white" type="button" onClick={getListPlaylist}>
                        Get Playlist
                    </button>
                </a>
            </div>
            {playlistsData.map((item) => (
                // console.log(item)
                item.tracks.total >= 0 && (
                    <Playlist
                        key={item.id}
                        selectedSong={selectedSong}
                        setSelected={setSelected}
                        data={item}
                        accessToken={accessToken}
                    />

                    )
                
            ))}
        </div>
    )
}

export default ListPlaylist;