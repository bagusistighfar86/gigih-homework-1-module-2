const Navbar = () => {
  return (
    <header>
        <div className="left-logo">
        <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
            alt=""
        />
        </div>
        <div className="search-bar">
        <input type="text" placeholder="Search your music" />
        </div>
        <div className="account text-white">
        <div className="account-photo"></div>
        <p>Halo, Bagus!</p>
        </div>
    </header>
  );
};

export default Navbar;