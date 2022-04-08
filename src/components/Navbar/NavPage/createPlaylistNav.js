// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
// import CreatePlaylistPage from "../../../pages/CreatePlaylist/createPlaylistPage";
// import { useSelector } from "react-redux";
// import PrivateRoute from "../../privateRoute";
// import Home from "../../../pages/home";

// const CreatePlaylistNav = () => {
//     const accessToken = useSelector (state => state.auth.accessToken)
    
//     const AUTH_URL = 'https://accounts.spotify.com/authorize'
//     const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
//     const redirect_uri = 'http://localhost:3000/'
//     const scopes = 'user-read-private user-read-email playlist-modify-private user-library-read user-library-modify'
//     const url = `${AUTH_URL}?client_id=${spotify_client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`
    
//     return (
//         <Router>
//             <div className="NavPage text-white">
//                 {/* <Link className="NavPageList" to="/create-playlist">Create Playlist</Link> */}
//             </div>
//             <Switch>
//                 {/* <Route path="/create-playlist">
//                     {accessToken ?  
//                         (
//                             // {console.log("create-Playlist")},
//                             <CreatePlaylistPage />
//                         )
//                         :
//                         <Redirect to="/authLogin"/>
//                     }
//                 </Route> */}
//                 {/* <PrivateRoute path="/create-playlist" component={Home}></PrivateRoute> */}
//                 {/* <Route path="/create-playlist" component={CreatePlaylistPage} />
//                 <Route path='/authLogin' component={() => { 
//                     window.location.href = url;
//                 }}/> */}
//             </Switch>
//         </Router>
//     )
// }

// export default CreatePlaylistNav