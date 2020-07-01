import { React, Link } from "libraries";
import Logo from "assets/images/img-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} className="navbar__logo" alt="dblCovid" />
      </Link>
    </nav>
  );
};

export default Navbar;
