import logo from "../images/cnc_logo.svg";
import { homePageLinks, otherPageLinks } from "../data"; // update with the correct path
import { socialLinks } from "../data";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const pageLinks = isHomePage ? homePageLinks : otherPageLinks;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} className="nav-logo" alt="cnc-customs" />
            </Link>

            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => (
              <li key={link.id}>
                {isHomePage ? (
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                ) : (
                  <Link to={link.href} className="nav-link">
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;

              if (icon === "fas fa-envelope") {
                return (
                  <li key={id}>
                    <a
                      href={`mailto:clint@cnccustoms.co.za`}
                      className="nav-icon"
                      rel="noopener noreferrer"
                    >
                      <i className={icon}></i>
                    </a>
                  </li>
                );
              }

              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    className="nav-icon"
                    rel="noopener noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className={`side-menu ${showMenu ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>

        {pageLinks.map((link) => (
          <a key={link.id} href={link.href}>
            {link.text}
          </a>
        ))}

        <a href="https://www.facebook.com/cnccustoms.co.za/">Facebook</a>
        <a href="https://www.instagram.com/cnccustoms/">Instagram</a>
        <a href="mailto:clint@cnccustoms.co.za">Mail</a>
      </div>
    </>
  );
};
export default Navbar;
