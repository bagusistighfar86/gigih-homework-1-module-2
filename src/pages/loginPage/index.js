import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAccessToken } from "../../redux/slices/tokenSlice";
import { useSelector } from "react-redux";

const LoginPage = () => {
    const AUTH_URL = 'https://accounts.spotify.com/authorize'
    const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirect_uri = 'http://localhost:3000/'
    const scopes = 'user-read-private user-read-email playlist-modify-private user-library-read user-library-modify'
    const url = `${AUTH_URL}?client_id=${spotify_client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`

    const dispatch = useDispatch()
    const history = useHistory()

    const accessToken = useSelector((state) => state.token.accessToken);

    const handleLogin = () => {
        window.location.replace(url)
    }

    useEffect(() => {
        if (accessToken) {
            history.push("/create-playlist");
        }
    }, [accessToken, history]);

    const accessTokenfromURL = window.location.hash
        .substring(1, window.location.hash.length - 1)
        .split("&")[0]
        .split("=")[1];

    if (accessTokenfromURL) {
        dispatch(setAccessToken({ accessToken: accessTokenfromURL }));
        history.push({
            pathname: "/create-playlist",
        });
    }

    return (
        <div className="Login">
            <a>
                <button className="btn btn-login text-white" type="button" onClick={handleLogin}>
                    Login
                </button>
            </a>
        </div>
    )
}

export default LoginPage