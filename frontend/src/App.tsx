import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./index.css";
import Login from "./pages/Login";
import Header from "./components/Header";
import { useAuth } from "./context/useAuth";

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <PrivateRoute path="/admin">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
};
const PrivateRoute: React.FC<any> = ({children, ...rest}) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default App;
