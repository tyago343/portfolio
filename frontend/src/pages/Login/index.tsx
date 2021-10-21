import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
interface LocationState {
  from: {
    pathname: string;
  };
}
const Login: React.FC = () => {
  const { login, user, error } = useAuth();
  const history = useHistory();
  const location = useLocation<LocationState>();
  let { from } = location.state || { from: { pathname: "/admin" } };
  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    const { userName, password } = evt.currentTarget.elements;
    login({
      userName: userName.value,
      password: password.value,
    });
  };
  useEffect(() => {
    if (user) {
      history.replace(from);
    }
  }, [user, from, history]);
  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">
            Usuario:
            <input type="text" name="userName" />
          </label>
          <label htmlFor="password">
            Contraseña:
            <input type="password" name="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
        {error}
      </section>
    </main>
  );
};

export default Login;
