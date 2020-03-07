import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup/index";
import Login from "./Login/index";
import Games from "./Games/index";

const Main = () => {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/games">
        <Games />
      </Route>
    </Switch>
  );
};
export default Main;
