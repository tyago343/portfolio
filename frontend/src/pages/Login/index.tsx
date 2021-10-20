import React from "react";
import { useAuth } from "../../context/useAuth";

const Login: React.FC = () => {
  const { login } = useAuth();
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const { userName, password } = evt.currentTarget.elements;
    login({ userName: userName.value, password: password.value });
  };
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
      </section>
    </main>
  );
};

export default Login;
