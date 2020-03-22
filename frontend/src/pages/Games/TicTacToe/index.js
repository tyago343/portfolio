import React, { useState } from "react";
import { H2, Ul, Li, P } from "./style";
import { checkWinner } from "./utils";
// true is O, false is X
const TicTacToe = props => {
  const [player, setPlayer] = useState(false);
  const [winner, setWinner] = useState("");
  const handleClick = e => {
    if (e.target.dataset.status === "free") {
      e.target.dataset.status = player ? "O" : "X";
      e.target.innerHTML = player ? "O" : "X";
      setPlayer(!player);
    } else {
      alert("juega otro lugar");
    }
    setWinner(checkWinner());
  };

  return (
    <div>
      <H2>Bienvenido al TaTeTi</H2>
      <P>{winner || ""}</P>
      <Ul>
        <Li data-index="1" data-status="free" onClick={handleClick}></Li>
        <Li data-index="2" data-status="free" onClick={handleClick}></Li>
        <Li data-index="3" data-status="free" onClick={handleClick}></Li>
        <Li data-index="4" data-status="free" onClick={handleClick}></Li>
        <Li data-index="5" data-status="free" onClick={handleClick}></Li>
        <Li data-index="6" data-status="free" onClick={handleClick}></Li>
        <Li data-index="7" data-status="free" onClick={handleClick}></Li>
        <Li data-index="8" data-status="free" onClick={handleClick}></Li>
        <Li data-index="9" data-status="free" onClick={handleClick}></Li>
      </Ul>
    </div>
  );
};
export default TicTacToe;
