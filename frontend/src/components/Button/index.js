import React from "react";
import propTypes from "prop-types";
import { StyledButton } from "./style";

const Button = ({ type, value, className, onClick, children, ...props }) => {
  return (
    <StyledButton
      type={type}
      value={value}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
Button.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.any
};
export default Button;
