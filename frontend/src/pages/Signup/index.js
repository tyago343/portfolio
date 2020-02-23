import React from "react";
import propTypes from "prop-types";
import Input from "../../components/Input/index";
import { useInput } from "../../components/Input/Input.hooks";
import { connect } from "react-redux";
import { crearUser } from "../../redux/sagas";
import { Wrapper, Button, Form } from "./style";
const SignupPage = props => {
  const fields = {
    firstName: useInput(""),
    lastName: useInput(""),
    userName: useInput(""),
    email: useInput(""),
    password: useInput(""),
    confirmPassword: useInput("")
  };
  const validateForm = () => {
    return (
      fields.userName.value.length > 0 &&
      fields.email.value.length > 0 &&
      fields.password.value.length > 0 &&
      fields.password.value === fields.confirmPassword.value
    );
  };
  const returnValues = fields => ({
    firstName: fields.firstName.value,
    lastName: fields.lastName.value,
    userName: fields.userName.value,
    email: fields.email.value,
    password: fields.password.value
  });
  const onSubmit = () => {
    if (validateForm()) {
      props.submitUser(returnValues(fields));
    } else {
      console.log("faltan campos amigo");
    }
  };
  return (
    <Wrapper>
      <Form>
        <Input
          type="text"
          name="firstName"
          label="Nombre"
          placeholder="Ingrese su nombre"
          onChange={fields.firstName.onChange}
          value={fields.firstName.value}
        />
        <Input
          type="text"
          name="lastName"
          label="Apellido"
          placeholder="Ingrese su apellido"
          onChange={fields.lastName.onChange}
          value={fields.lastName.value}
        />
        <Input
          type="text"
          name="userName"
          label="Usuario"
          placeholder="Ingrese un nombre de usuario"
          onChange={fields.userName.onChange}
          value={fields.userName.value}
        />
        <Input
          type="email"
          name="email"
          label="Correo electrónico"
          placeholder="Ingrese su correo electronico"
          onChange={fields.email.onChange}
          value={fields.email.value}
        />
        <Input
          type="password"
          name="password"
          label="Contraseña"
          placeholder="Ingrese una contraseña"
          onChange={fields.password.onChange}
          value={fields.password.value}
        />
        <Input
          type="password"
          name="confirmation-password"
          label="Repita su contraseña"
          placeholder="Repita su contraseña"
          onChange={fields.confirmPassword.onChange}
          value={fields.confirmPassword.value}
        />
        <Button type="button" className="btn" onClick={onSubmit}>
          Enviar
        </Button>
      </Form>
    </Wrapper>
  );
};
SignupPage.propTypes = {
  submitUser: propTypes.func
};
const mapDispatchToProps = dispatch => ({
  submitUser: user => {
    dispatch(crearUser(user));
  }
});

export default connect(null, mapDispatchToProps)(SignupPage);
