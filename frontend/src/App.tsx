import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./index.css"

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/admin">
        <Dashboard />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default App;
