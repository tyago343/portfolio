import styled from "styled-components";
import img from "./images/signup-bg.jpg";
export const Wrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;
export const Button = styled.button`
  color: #fff;
  background-color: #e74c3c;
  outline: none;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 50px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
`;
export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  padding: 70px 100px;
`;
export const H1 = styled.h1`
  font-size: 30px;
  color: #fff;
  margin-bottom: 35px;
  text-align: center;
`;
