import { React, Link } from "libraries";
import Logo from "assets/images/img-logo.svg";
import { Navbar, NavbarLogo } from "./Navbar";

const MyNavbar = () => {
  return (
    <Navbar>
      <Link to="/react-covid">
        <NavbarLogo src={Logo} alt="dblCovid" />
      </Link>
    </Navbar>
  );
};

export default MyNavbar;
