import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  LogoWrapper,
  LegendWrapper,
  MenuWrapper
} from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>SC</LogoWrapper>
      <LegendWrapper>
        Aqui irá el nombre o la página en la que se está situado.
      </LegendWrapper>
      <MenuWrapper>
        <Link to="/signup">Registro</Link>
        <Link to="/login">Login</Link>
        <Link to="/games/tictac">TaTeTi</Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default connect(null, null)(Header);
