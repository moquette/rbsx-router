import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
export const Header = (props) => {
  const title = props.title;
  useEffect(() => {
    const navbar = document.getElementById("navbarCollapse");
    const bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: false,
    });

    document.querySelectorAll(".nav-link").forEach((item) => {
      item.addEventListener("click", (event) => {
        bsCollapse.hide();
      });
    });
  });

  return (
    <header className="header">
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-bootstrap"></i> {title || "React BSX"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" exact={true}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
