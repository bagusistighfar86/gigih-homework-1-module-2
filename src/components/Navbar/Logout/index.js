import { setRemoveAccessToken } from "../../../redux/slices/tokenSlice";
import { useDispatch } from "react-redux";
const LogoutButton = () => {
    const dispatch = useDispatch()
    return (
        <div className="Logout">
            <a>
                <button 
                    className="btn btn-logout text-white" 
                    type="button" 
                    onClick={() => {
                    dispatch(setRemoveAccessToken());
                }}>
                    Logout
                </button>
            </a>
        </div>
    )
}

export default LogoutButton