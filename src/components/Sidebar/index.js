// Libraries
import React from 'react';

//  CSS
import './sidebar.css';
import { AiFillHome } from 'react-icons/ai';
import { CgPlayList } from 'react-icons/cg';

function Sidebar() {
  return (
    <div className="sidebar-box">
      <div className="sidebar-content">
        <ul>
          <li className="sideNav d-flex mb-4">
            <AiFillHome className="my-auto me-2 fs-2" />
            <p className="fs-4 my-auto">Home</p>
          </li>
          <li className="sideNav d-flex mb-4">
            <CgPlayList className="my-auto me-2 fs-2" />
            <p className="fs-4 my-auto">Playlist</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
