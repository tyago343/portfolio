import React from "react";
import propTypes from "prop-types";
import Input from "../../components/Input/index";
import { useInput } from "../../components/Input/Input.hooks";
import { connect } from "react-redux";
import { crearUser } from "../../redux/sagas";
import { Wrapper, Button } from "./style";
const LoginPage = props => {
  const fields = {
    userName: useInput(""),
    password: useInput("")
  };
  const validateForm = () => {
    return fields.userName.value.length > 0 && fields.password.value.length > 0;
  };
  const returnValues = fields => ({
    userName: fields.userName.value,
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
      <form>
        <Input
          type="text"
          name="userName"
          label="Usuario"
          placeholder="Ingrese un nombre de usuario"
          onChange={fields.userName.onChange}
          value={fields.userName.value}
        />
        <Input
          type="password"
          name="password"
          label="Contraseña"
          placeholder="Ingrese una contraseña"
          onChange={fields.password.onChange}
          value={fields.password.value}
        />
        <Button type="button" className="btn" onClick={onSubmit}>
          Enviar
        </Button>
      </form>
    </Wrapper>
  );
};
LoginPage.propTypes = {
  submitUser: propTypes.func
};
const mapDispatchToProps = dispatch => ({
  submitUser: user => {
    dispatch(crearUser(user));
  }
});

export default connect(null, mapDispatchToProps)(LoginPage);
