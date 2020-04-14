import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  LogoWrapper,
  LegendWrapper,
  MenuWrapper,
  HamburguerBar
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
        <HamburguerBar></HamburguerBar>
        <HamburguerBar></HamburguerBar>
        <HamburguerBar></HamburguerBar>
        <Link to="/signup">Registro</Link>
        <Link to="/login">Login</Link>
        <Link to="/games/tictac">TaTeTi</Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
