import Search from "../Search/index";
import Login from "../Login/index";

const Navbar = ({ search, accessToken, handleSubmit, handleChange, getSpotify }) => {
  return (
    <header>
      <div className="left-logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
          alt=""
        />
      </div>
      <Search search={search} handleChange={handleChange} handleSubmit={handleSubmit} getSpotify={getSpotify}/>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search your music" />
        </div> */}
      {accessToken? "":<Login />}
      {/* <div className="Login">
        <a href="#">
          <button class="btn btn-login text-white" type="button">
            Login
          </button>
        </a>
      </div> */}
      {/* <div className="account text-white">
        <div className="account-photo"></div>
        <p>Halo, Bagus!</p>
      </div> */}
    </header>
  );
};

export default Navbar;