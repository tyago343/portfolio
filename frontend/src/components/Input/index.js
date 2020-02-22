import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: #fff;
  &:focus {
    ~ .label {
      top: -12px;
      font-size: 12px;
    }
    border: none;
    outline: none;
    border-bottom: 1px solid #e74c3c;
  }

  &:valid ~ .label {
    top: -12px;
    font-size: 12px;
  }
`;
const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px;
  color: #fff;
  pointer-event: none;
  transition: all 0.5s ease-in-out;
`;
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 25px;
`;
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
      <Label className="label" htmlFor={name}>
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
