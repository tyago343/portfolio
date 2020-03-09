import React, { useState } from "react";
import { H2, Ul, Li } from "./style";
// true is O, false is X
const TicTacToe = props => {
  const [player, setPlayer] = useState(false);
  const handleClick = e => {
    if (player) {
      setPlayer(!player);
    } else {
      setPlayer(!player);
    }
  };

  return (
    <div>
      <H2>Bienvenido al TaTeTi</H2>
      <Ul>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
        <Li onClick={handleClick}>{player ? "O" : "X"}</Li>
      </Ul>
    </div>
  );
};
export default TicTacToe;
