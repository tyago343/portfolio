import React, { useState } from "react";

const Cell = props => {
  const [filled, setFilled] = useState(false);
  const handleClick = () => {
    if (!filled) {
      props.handleClick();
      setFilled(true);
    }
  };
  return <li onClick={handleClick}>{props.value}</li>;
};
export default Cell;
