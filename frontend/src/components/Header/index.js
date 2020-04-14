import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  LogoWrapper,
  LegendWrapper,
  MenuWrapper
} from "./style";

const Header = () => {
  var [openMenu, setOpenMenu] = useState(false);
  var handleClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <HeaderWrapper>
      <LogoWrapper>SC</LogoWrapper>
      <LegendWrapper>
        Aqui irá el nombre o la página en la que se está situado.
      </LegendWrapper>
      <MenuWrapper openMenu={openMenu} onClick={handleClick}>
        <Link to="/signup">Registro</Link>
        <Link to="/login">Login</Link>
        <Link to="/games/tictac">TaTeTi</Link>
        <span></span>
        <span></span>
        <span></span>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
