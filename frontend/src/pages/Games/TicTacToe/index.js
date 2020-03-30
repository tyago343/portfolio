import React, { useState } from "react";
import { H2, Ul, Li, P, Span } from "./style";
import { checkWinner } from "./utils";
// true is O, false is X
const TicTacToe = props => {
  const [player, setPlayer] = useState(false);
  const [winner, setWinner] = useState("");
  let [turn, setturn] = useState(0);
  const handleClick = e => {
    if (e.target.dataset.status === "free") {
      e.target.dataset.status = player ? "O" : "X";
      e.target.innerHTML = player ? "O" : "X";
      setPlayer(!player);
      setturn(++turn);
    } else {
      alert("juega otro lugar");
    }
    setWinner(checkWinner(turn));
  };
  const resetButton = () => {
    const celdas = document.querySelectorAll("li");
    celdas.forEach(cell => {
      cell.dataset.status = "free";
      cell.innerHTML = "";
    });
    setturn(0);
    setWinner("");
  };
  return (
    <div>
      <H2>Bienvenido al TaTeTi</H2>
      <P>{winner || ""}</P>
      <Ul>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
        <Li data-status="free" onClick={handleClick}></Li>
      </Ul>
      <Span onClick={resetButton}>Reiniciar Juego</Span>
    </div>
  );
};
export default TicTacToe;
