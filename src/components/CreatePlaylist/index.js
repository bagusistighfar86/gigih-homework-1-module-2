import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const CreatePlaylist = ({ selectedSong, setSelected }) => {
    const accessToken = useSelector (state => state.auth.token)
    
    const [playlistForm, setPlaylistForm] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
        if (playlistForm.title.length === 0)
            return
        if (playlistForm.title.length >= 10){
            setErrors({ ...errors, title: false })
        }
        if (playlistForm.title.length < 10){
            setErrors({ ...errors, title: true })
        }
    },[playlistForm])

    const [errors, setErrors] = useState({
        title: false
    })

    async function getUserData ()  {
        try {
            const res = await axios.get(`https://api.spotify.com/v1/me?access_token=${accessToken}`)
            if (res) {
                console.log(res.data)
                return res?.data?.id
            }
        } catch (err) {
            console.log(err)
        }
    }
    
    const createPlaylist = async (user_id) => {
        try {
            const res = await axios.post(`https://api.spotify.com/v1/users/${user_id}/playlists?access_token=${accessToken}`, {
                name: playlistForm.title,
                public: false,
                collaborative: false,
                description: playlistForm.description,
            })
            if (res) {
                console.log(res.data)
                return res?.data?.id
            }
        } catch (err) {
            console.log(err)
        }
    }

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

    const handleChangeForm = (e) => {
        
        setPlaylistForm({
            ...playlistForm, [e.target.name]: e.target.value
        })
        console.log({ ...playlistForm, [e.target.name]: e.target.value })
    }

    const handleSubmitPlaylist = async (e) => {
        e.preventDefault();
        try {
            const user_id = await getUserData()
            const playlistId = await createPlaylist(user_id)
            if (playlistId) {
                if(selectedSong !== []){
                    const res = await addSongsToPlaylist(playlistId)
                }
                const res = playlistId
                if (res) {
                    console.log("BerhasilUpload")

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
            <h1 className="text-white">Create Playlist</h1>
            <form onSubmit={handleSubmitPlaylist}>
                <div className="form-group">
                    <label htmlFor="title" className="text-white"></label>
                    <input type="text" id="title" name="title" placeholder="Enter playlist tittle" onChange={handleChangeForm} />
                    {errors.title &&
                        <p className='error-title-msg text-white'>Minimum 10 huruf</p>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="text-white">Description</label>
                    <input type="text" id="description" name="description" placeholder="Enter playlist description" onChange={handleChangeForm} />
                </div>
                <a className="btn btn-add-playlist" href="#">
                    <button className="text-white" type="submit">
                        Create Playlist
                    </button>
                </a>
            </form>
        </div>
    )
}

export default CreatePlaylist;