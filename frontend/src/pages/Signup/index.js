import React, { useState, useEffect } from "react";
import Input from "../../components/Input/index";
import { useInput } from "../../components/Input/Input.hooks";
import { connect } from "react-redux";
import { crearUser } from "../../redux/sagas";

const signupForm = props => {
  const firstName = useInput("");
  const lastName = useInput("");
  const userName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const onSubmit = () => {
    console.log();
    props.onSubmit2({
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      email: email.value,
      password: password.value
    });
  };
  return (
    <form>
      <Input
        type="text"
        name="firstName"
        label="Nombre"
        placeholder="Ingrese su nombre"
        onChange={firstName.onChange}
        value={firstName.value}
      />
      <Input
        type="text"
        name="lastName"
        label="Apellido"
        placeholder="Ingrese su apellido"
        onChange={lastName.onChange}
        value={lastName.value}
      />
      <Input
        type="text"
        name="userName"
        label="Usuario"
        placeholder="Ingrese un nombre de usuario"
        onChange={userName.onChange}
        value={userName.value}
      />
      <Input
        type="email"
        name="email"
        label="Correo electronico"
        placeholder="Ingrese su correo electronico"
        onChange={email.onChange}
        value={email.value}
      />
      <Input
        type="password"
        name="password"
        label="Contraseña"
        placeholder="Ingrese una contraseña"
        onChange={password.onChange}
        value={password.value}
      />
      <span onClick={onSubmit}>ss</span>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmit2: user => {
    dispatch(crearUser(user));
  }
});

export default connect(null, mapDispatchToProps)(signupForm);
