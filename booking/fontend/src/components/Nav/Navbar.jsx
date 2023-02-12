import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Nav.css";
export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h3>booking</h3>
        </Link>

        {user ? (
          <div className="btn">Name : {user.username}</div>
        ) : (
          <div className="btn">
            <button>register</button>
            <button>login</button>
          </div>
        )}
      </div>
    </div>
  );
}
