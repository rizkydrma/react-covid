import { React, PropTypes, Styled } from "libraries";
import TripleDot from "../../../assets/images/triple-dot.svg";

const FooterText = Styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const Footer = ({ text }) => {
  return (
    <FooterText>
      <img src={TripleDot} alt="Triple Dot" className="credit__image" />
      <p>
        {text}
        <span className="credit__text--primary">mathdroid.com</span>
      </p>
    </FooterText>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: "",
};

export default Footer;
