import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const [show, setShow] = useState(false);
  const handleButtonToggle = () => {
    return setShow(!show);
  };

  const handleNavLinkClick = () =>{
    setShow(false)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" onClick={handleNavLinkClick}>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={handleNavLinkClick}>Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleNavLinkClick}>FeedBack</NavLink>
              </li>
              <li>
                <NavLink></NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
