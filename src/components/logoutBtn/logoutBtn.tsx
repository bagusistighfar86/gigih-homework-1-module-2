// Libaries
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setRemoveAccessToken } from '../../redux/slices/tokenSlice';

// CSS
import './logoutButton.css';

function LogoutButton() {
  const dispatch = useAppDispatch();

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
