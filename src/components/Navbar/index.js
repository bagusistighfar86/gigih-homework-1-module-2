import Search from "../Search/index";
import Login from "../Login/index";

const Navbar = ({ search, accessToken, handleSubmit, handleChangeSearch }) => {
  return (
    <header>
      <div className="left-logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
          alt=""
        />
      </div>
      <Search
        search={search}
        handleChangeSearch={handleChangeSearch}
        handleSubmit={handleSubmit}
      />
      {accessToken ? "" : <Login />}
    </header>
  );
};

export default Navbar;