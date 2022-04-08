import Search from "../Search/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LogoutButton from "./Logout";
const Navbar = ({ search, handleSubmit, handleChangeSearch }) => {
  const dispatch = useDispatch()
  const accessToken = useSelector (state => state.token.accessToken)
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
      {accessToken ? 
        (<LogoutButton />) 
        : 
        ( <p></p> )
      }

    </header>
  );
};

export default Navbar;