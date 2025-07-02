import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const module = { listStyleType: "none", display: "flex", gap: "20px" };
  return (
    <div>
      <ul style={module}>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
