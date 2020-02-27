import React, { useEffect } from "react";
import propTypes from "prop-types";
import Input from "../../components/Input/index";
import { useInput } from "../../components/Input/Input.hooks";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions/user";
import { Wrapper, Button, Form, H1 } from "./style";
import { useHistory } from "react-router";
const SignupPage = props => {
  const firstName = useInput("");
  const lastName = useInput("");
  const userName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const history = useHistory();
  useEffect(() => {
    console.log(props.user);
    if (Object.values(props.user).length) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user]);
  const validateForm = () => {
    return (
      userName.value.length &&
      email.value.length &&
      password.value.length &&
      password.value === confirmPassword.value
    );
  };
  const returnValues = () => ({
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    email: email.value,
    password: password.value
  });
  const onSubmit = () => {
    if (validateForm()) {
      const formvalues = returnValues();
      props.onCreateUser(formvalues);
    } else {
      console.log("faltan campos amigo");
    }
  };
  return (
    <Wrapper>
      <Form>
        <H1>Registrate</H1>
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
        <Input
          type="password"
          name="confirmation-password"
          label="Repita su contraseña"
          placeholder="Repita su contraseña"
          onChange={confirmPassword.onChange}
          value={confirmPassword.value}
        />
        <Button type="button" className="btn" onClick={onSubmit}>
          Enviar
        </Button>
      </Form>
    </Wrapper>
  );
};
SignupPage.propTypes = {
  onCreateUser: propTypes.func,
  user: propTypes.object
};
const mapDispatchToProps = dispatch => ({
  onCreateUser: user => {
    dispatch(createUser(user));
  }
});
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
