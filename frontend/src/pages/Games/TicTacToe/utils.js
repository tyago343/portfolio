const checkHorizontals = () => {
  const fields = document.querySelectorAll("li");
  if (
    fields[0].innerText === fields[1].innerText &&
    fields[0].innerText === fields[2].innerText &&
    fields[0].innerText !== ""
  ) {
    return "ha ganado " + fields[0].innerText;
  } else if (
    fields[3].innerText === fields[4].innerText &&
    fields[3].innerText === fields[5].innerText &&
    fields[3].innerText !== ""
  ) {
    return "ha ganado " + fields[3].innerText;
  } else if (
    fields[6].innerText === fields[7].innerText &&
    fields[6].innerText === fields[8].innerText &&
    fields[6].innerText !== ""
  ) {
    return "ha ganado " + fields[6].innerText;
  }
};
const checkVerticals = () => {
  const fields = document.querySelectorAll("li");
  if (
    fields[0].innerText === fields[3].innerText &&
    fields[0].innerText === fields[6].innerText &&
    fields[0].innerText !== ""
  ) {
    return "ha ganado " + fields[0].innerText;
  } else if (
    fields[1].innerText === fields[4].innerText &&
    fields[1].innerText === fields[7].innerText &&
    fields[1].innerText !== ""
  ) {
    return "ha ganado " + fields[1].innerText;
  } else if (
    fields[2].innerText === fields[5].innerText &&
    fields[2].innerText === fields[8].innerText &&
    fields[2].innerText !== ""
  ) {
    return "ha ganado " + fields[8].innerText;
  }
};
const checkDiagonals = () => {
  const fields = document.querySelectorAll("li");
  if (
    fields[0].innerText === fields[4].innerText &&
    fields[0].innerText === fields[8].innerText &&
    fields[0].innerText !== ""
  ) {
    return "ha ganado " + fields[0].innerText;
  } else if (
    fields[2].innerText === fields[4].innerText &&
    fields[2].innerText === fields[6].innerText &&
    fields[2].innerText !== ""
  ) {
    return "ha ganado " + fields[2].innerText;
  }
};

export const checkWinner = turn => {
  let result = checkHorizontals();
  if (result) return result;
  result = checkVerticals();
  if (result) return result;
  result = checkDiagonals();
  if (result) return result;
  if (turn === 9) return "Hay un empate";
};
