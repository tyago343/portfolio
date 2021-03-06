import styled from "styled-components";

export const Input = styled.input`
  border: 0;
  margin: 7px 0px;
  border-bottom: 1px solid #fff;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 18px;
  color: #fff;
  &:focus {
    ~ label {
      top: -12px;
      font-size: 15px;
    }
    border: none;
    outline: none;
    border-bottom: 1px solid #e74c3c;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 18px;
  color: #fff;
  pointer-event: none;
  transition: all 0.5s ease-in-out;
  &.label {
    top: -12px;
    font-size: 15px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 25px;
`;
