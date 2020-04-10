import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <p className="navbar-nav">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
            </p>
      </div>
    </nav>
  );
}

export default Navbar; 