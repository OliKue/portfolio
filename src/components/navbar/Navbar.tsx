import { render } from "@testing-library/react";
import "./Navbar.css";
import { Link } from "react-scroll";

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const render = (): React.ReactElement => {
    return (
      <nav>
        <Link to="top" spy={true} smooth={true} duration={500} offset={-100}>
          <h1>Oliver Kütemeier</h1>
        </Link>

        <ul className="navigation">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* TODO: Change Icon for mobilebutton */}
        <button className="burger-menu" id="burger-menu"></button>
      </nav>
    );
  };
  return render();
};
