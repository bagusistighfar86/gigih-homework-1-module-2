import axios from 'axios';
import React, {useState} from 'react';

const CreatePlaylist = ({ selectedSong, setSelected, dataSearch, accessToken }) => {
    const [playlistForm,setPlaylistForm] = useState({
        title: '',
        description: ''
    })

    const [errors,setErrors] = useState({
        title: false
    })

    const getUserData = async () => {
        try {
            const res = await axios.get(`https://api.spotify.com/v1/me?access_token=${accessToken}`)
            if (res) {
                return res?.data?.id
            }
        } catch (err) {
            console.log(err)
        }
    }

    const createPlaylist = async (user_id) => {
        try {
            const res = await axios.post(`/users/${user_id}/playlists`, {
                name: playlistForm.title,
                public: false,
                collaborative: false,
                description: playlistForm.description,
            })
            if (res) {
                return res?.data?.id
            }
        } catch (err) {
            console.log(err)
        }
    }

    const addSongsToPlaylist = async (playlistId) => {
        try {
            const res = await axios.post(`/playlists/${playlistId}/tracks`, {
                uri: selectedSong.map((song) => song.uri)
            })
            return res
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangeForm = (e) => {
        setPlaylistForm({
            ...playlistForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitPlaylist = async (e) => {
        e.preventDefault();
        if (playlistForm.title.length < 10) return setErrors({...errors,title: true})
        try {
            const user_id = await getUserData()
            const playlistId = await createPlaylist(user_id)
            if (playlistId) {
                const res = await addSongsToPlaylist(playlistId)
                if (res) {
                    setPlaylistForm({
                        title: '',
                        description: '',
                    })
                    setSelected([])
                    alert('Playlist is created!')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="CreatePlaylist home-section">
            {dataSearch.length === 0 &&
                <>
                    <h1 className="text-white">Create Playlist</h1>
                    <form onSubmit={handleSubmitPlaylist}>
                        <div className="form-group">
                            <label htmlFor="title" className="text-white">First name</label>
                            <input type="text" id="title" name="title" placeholder="Enter playlist tittle" onChange={handleChangeForm}/>
                            {errors.title &&
                                <p className='error-title-msg'>Minimum 10 huruf</p>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="text-white">Description</label>
                            <input type="text" id="description" name="description" placeholder="Enter playlist description" onChange={handleChangeForm}/>
                        </div>
                        <a className="btn btn-add-playlist" href="#">
                            <button className="text-white" type="submit">
                                Create Playlist
                            </button>
                        </a>
                    </form>
                </>
            }
        </div>
    )
}

export default CreatePlaylist;