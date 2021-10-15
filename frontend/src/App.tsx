import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./admin";
import Homepage from "./pages/Homepage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  );
};
export default App;
