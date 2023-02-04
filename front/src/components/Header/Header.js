import Menu from "./Dropdown";
import "../../css/Main.css";
import { useOnHoverOutside } from "./useOnHoverOutside";

import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Header = () => {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <div className="App">
      <div class="topnav" id="myTopnav">
        <Link to="/">
          <span class="logo">STAR</span>
        </Link>
        <div class="menu">
          <div class="dropdown-menu" ref={dropdownRef}>
            <div class="main-menu">
              <Link to="/aboutStar">About Star</Link>
              <Link to="/summary">Observing Stars</Link>
              <Link to="/constellations">About Constellations</Link>
            </div>
            <div class="sub-menu" onMouseOver={() => setMenuDropDownOpen(true)}>
              <Link to="#">Observation Info</Link>
            </div>
            <br></br>
            {isMenuDropDownOpen && <Menu />}
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
