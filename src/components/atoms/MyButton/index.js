import { React, PropTypes } from "libraries";
import { ButtonPrimary } from "./MyButton";

const MyButton = ({ title }) => {
  return <ButtonPrimary>{title}</ButtonPrimary>;
};

MyButton.propTypes = {
  title: PropTypes.string,
};

MyButton.defaultProps = {
  title: "",
};

export default MyButton;
