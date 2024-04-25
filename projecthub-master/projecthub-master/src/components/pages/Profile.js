import React, { useState } from "react";

import "./Profile.css";
import { Link, NavLink } from "react-router-dom";

export const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        ProjectHub
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/stop">Home</NavLink>
        </li>
        <li>
          <NavLink to="/stop">Upload</NavLink>
        </li>
        <li>
          <NavLink to="/stop">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/stop">Videos</NavLink>
        </li>
        <li>
          <NavLink to="/login">SignUp/SignIn</NavLink>
        </li>
        
        
      </ul>
    </nav>
  );
};
export default Profile;