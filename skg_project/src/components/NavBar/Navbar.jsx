import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import love_skg from "../../assets/love_skg.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={love_skg} />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#where2go">Where to Go</a>
        </li>
        <li className="p__opensans">
          <a href="#what2do">What to Do</a>
        </li>
        <li className="p__opensans">
          <a href="#info">Information</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book A Ticket
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GrFormClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#where2go" onClick={() => setToggleMenu(false)}>
                  Where to Go
                </a>
              </li>
              <li>
                <a href="#what2do" onClick={() => setToggleMenu(false)}>
                  What to Do
                </a>
              </li>
              <li>
                <a href="#info" onClick={() => setToggleMenu(false)}>
                  Information
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
