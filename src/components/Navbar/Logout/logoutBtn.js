// Libaries
import React from 'react';
import { useDispatch } from 'react-redux';
import { setRemoveAccessToken } from '../../../redux/slices/tokenSlice';

// CSS
import './logoutButton.css';

function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <div className="Logout text-end">
      <button
        className="btn btn-logout btn-danger text-white"
        type="button"
        onClick={() => {
          dispatch(setRemoveAccessToken());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
