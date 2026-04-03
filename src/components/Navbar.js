import React, { useContext} from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

  const { role, setRole } = useContext(AppContext);
  const { darkMode, setDarkMode } = useContext(AppContext);


  return (
    <div className="navbar">

      {/* LEFT SIDE */}
      <h2>💰 Finance Dashboard</h2>


      {/* RIGHT SIDE */}
      <div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* ROLE BADGE */}
        <span
          className={`role-badge ${
            role === "admin" ? "role-admin" : "role-viewer"
          }`}
        >
          {role.toUpperCase()}
        </span>
        <button 
  className="dark-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
      </div>
    </div>
  );
};

export default Navbar;