import React from "react";

const Login: React.FC = () => {
  return (
    <main>
      <section>
        <form>
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
