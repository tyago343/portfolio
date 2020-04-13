import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup/index";
import Login from "./Login/index";
import NoMatch from "./NoMatch/index";
import TicTacToe from "./Games/TicTacToe";
import PhotoCam from "./Utilities/PhotoCam";
import Header from "../components/Header";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/pictures">
          <PhotoCam />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/games/tictac">
          <TicTacToe />
        </Route>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default Main;
