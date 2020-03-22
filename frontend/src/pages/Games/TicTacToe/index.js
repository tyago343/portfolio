import React, { useState } from "react";
import { H2, Ul, Li } from "./style";
// true is O, false is X
const TicTacToe = props => {
  const [player, setPlayer] = useState(false);
  const handleClick = e => {
    if (e.target.dataset.status === "free") {
      e.target.dataset.status = player ? "O" : "X";
      e.target.innerHTML = player ? "O" : "X";
      setPlayer(!player);
    } else {
      alert("juega otro lugar");
    }
    checkHorizontals();
  };
  const checkHorizontals = () => {
    const fields = document.querySelectorAll("li");
    if (
      fields[0].innerText === fields[1].innerText &&
      fields[0].innerText === fields[2].innerText &&
      fields[0].innerText !== ""
    ) {
      alert("1ha ganado " + fields[0].innerText);
    } else if (
      fields[3].innerText === fields[4].innerText &&
      fields[3].innerText === fields[5].innerText &&
      fields[3].innerText !== ""
    ) {
      alert("2ha ganado " + fields[3].innerText);
    } else if (
      fields[6].innerText === fields[7].innerText &&
      fields[6].innerText === fields[8].innerText &&
      fields[6].innerText !== ""
    ) {
      alert("3ha ganado " + fields[6].innerText);
    }
  };
  return (
    <div>
      <H2>Bienvenido al TaTeTi</H2>
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
