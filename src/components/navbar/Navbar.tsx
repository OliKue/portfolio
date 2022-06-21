import { render } from "@testing-library/react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  const render = (): React.ReactElement => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="top"
            spy={true}
            smooth={true}
            duration={200}
            offset={-100}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            O K
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <IconContext.Provider
              value={{ color: "#fff", className: "menu-icon" }}
            >
              <div>
                <FaBars />
              </div>
            </IconContext.Provider>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={200}
                offset={-100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={200}
                offset={-100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={200}
                offset={-100}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  return render();
};
