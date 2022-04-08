import Search from "../Search/index";
import CreatePlaylistNav from "./NavPage/createPlaylistNav";

const Navbar = ({ search, handleSubmit, handleChangeSearch }) => {
  
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
      <CreatePlaylistNav />
    </header>
  );
};

export default Navbar;