import styled from "styled-components";

export const HeaderWrapper = styled.header``;
export const LogoWrapper = styled.div``;
export const LegendWrapper = styled.div``;
export const MenuWrapper = styled.nav`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  & span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  & span:nth-child(1) {
    transform: ${({ openMenu }) => (openMenu ? "rotate(135deg)" : "")};
    top: ${({ openMenu }) => (openMenu ? "18px" : 0)};

    & span:nth-child(2) {
      top: 18px;
      left: ${({ openMenu }) => (openMenu ? "0" : "-60px")};
      opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
    }
    & span:nth-child(3) {
      top: ${({ openMenu }) => (openMenu ? "18px" : "36px")};
      transform: ${({ openMenu }) => (openMenu ? "rotate(-135deg)" : "")};
    }
  }
`;
