import { React, PropTypes } from "libraries";
import TripleDot from "../../../assets/images/triple-dot.svg";
import "./footer.css";

const Footer = ({ text }) => {
  return (
    <div className="homepage__credit">
      <img src={TripleDot} alt="Triple Dot" className="credit__image" />
      <p>
        {text}
        <span className="credit__text--primary">mathdroid.com</span>
      </p>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: "",
};

export default Footer;
