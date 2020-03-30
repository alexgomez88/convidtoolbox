import React from "react";
import "./style.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => (
  <nav
    className="navbar base-menu"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-menu is-active">
      <div className="navbar-center">
        <Link to="/" className="navbar-item">
          <FontAwesomeIcon
            icon={{ prefix: "fas", iconName: "home" }}
            size="2x"
          />
          <span>Home</span>
        </Link>
        <Link to="tips" className="navbar-item">
          <FontAwesomeIcon
            icon={{ prefix: "fas", iconName: "blog" }}
            size="2x"
          />
          <span>Posts</span>
        </Link>
        <Link to="doctor" className="navbar-item">
          <FontAwesomeIcon
            icon={{ prefix: "fas", iconName: "notes-medical" }}
            size="2x"
          />
          <span>Doctor</span>
        </Link>
        <Link to="about" className="navbar-item">
          <FontAwesomeIcon
            icon={{ prefix: "fas", iconName: "info" }}
            size="2x"
          />
          <span>Sobre</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Menu;
