import React from "react";
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";
import TicTacToe from "./TicTacToe";
const Games = props => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Sección de juegos</h1>
      <ul>
        <li>
          <Link to={`${url}/tictactoe`}>TicTacToe</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/tictactoe`}>
          <TicTacToe />
        </Route>
      </Switch>
    </div>
  );
};
export default Games;
