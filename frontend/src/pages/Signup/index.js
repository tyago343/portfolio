import React from "react";
import propTypes from "prop-types";
import Input from "../../components/Input/index";
import { useInput } from "../../components/Input/Input.hooks";
import { connect } from "react-redux";
import { crearUser } from "../../redux/sagas";
import { Wrapper, Button } from "./style";
const signupForm = props => {
  const firstName = useInput("");
  const lastName = useInput("");
  const userName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const onSubmit = () => {
    props.submitUser({
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      email: email.value,
      password: password.value
    });
  };
  return (
    <Wrapper>
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
          label="Correo electrónico"
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
        <Button type="button" className="btn" onClick={onSubmit}>
          Enviar
        </Button>
      </form>
    </Wrapper>
  );
};
signupForm.propTypes = {
  submitUser: propTypes.func
};
const mapDispatchToProps = dispatch => ({
  submitUser: user => {
    dispatch(crearUser(user));
  }
});

export default connect(null, mapDispatchToProps)(signupForm);
