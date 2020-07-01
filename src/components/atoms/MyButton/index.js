import { React, PropTypes } from "libraries";
import "./mybutton.css";

const MyButton = ({ title }) => {
  return <button className="button button--primary">{title}</button>;
};

MyButton.propTypes = {
  title: PropTypes.string,
};

MyButton.defaultProps = {
  title: "",
};

export default MyButton;
