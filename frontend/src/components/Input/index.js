import React from "react";
import propTypes from "prop-types";
import { Wrapper, Input, Label } from "./style";
const StringInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {
  return (
    <Wrapper>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className={className}
        style={error && { border: "solid 1px red" }}
      />
      <Label className={value ? "label" : ""} htmlFor={name}>
        {label}
      </Label>
      {error && <p>{error}</p>}
    </Wrapper>
  );
};
StringInput.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string,
  value: propTypes.string,
  error: propTypes.string,
  children: propTypes.any,
  label: propTypes.string
};
export default StringInput;
