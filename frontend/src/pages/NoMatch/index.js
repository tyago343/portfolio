import React from "react";
import { useLocation } from "react-router-dom";
const NoMatch = props => {
  const location = useLocation();

  return <p>La ruta {location.pathname} no existe</p>;
};
export default NoMatch;
