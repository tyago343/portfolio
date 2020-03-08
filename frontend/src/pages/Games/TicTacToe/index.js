import React, { useState } from "react";
import { H2, Ul, Li } from "./style";
// true is O, false is X
const TicTacToe = props => {
  const [player, setPlayer] = useState(false);
  const handleClick = e => {
    if (player) {
      e.target.text = "O";
      setPlayer(!player);
    } else {
      e.target.text = "X";
      setPlayer(!player);
    }
  };
  return (
    <div>
      <H2>Bienvenido al TaTeTi</H2>
      <Ul>
        <Li onClick={handleClick}>hola</Li>
      </Ul>
    </div>
  );
};
export default TicTacToe;
