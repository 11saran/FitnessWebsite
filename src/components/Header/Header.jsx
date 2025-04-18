import React, { useState } from "react";
import "./Header.css";
import logo from "./../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

function Header() {
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="Menu Icon"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              span={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              span={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              smooth={true}
              span={true}
              onClick={() => setMenuOpened(false)}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              smooth={true}
              span={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="Testimonials"
              smooth={true}
              span={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
