import React, { useEffect } from "react";
import propTypes from "prop-types";
import Input from "../../components/Input/index";
import { useInput } from "../../components/Input/Input.hooks";
import { connect } from "react-redux";
import { Wrapper, Form, H1 } from "./style";
import { loginUser } from "../../redux/actions/user";
import { useHistory } from "react-router";
import Button from "../../components/Button/index";
const LoginPage = props => {
  const fields = {
    userName: useInput(""),
    password: useInput("")
  };
  const history = useHistory();
  useEffect(() => {
    if (Object.values(props.user).length) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user]);
  const validateForm = () => {
    return fields.userName.value.length > 0 && fields.password.value.length > 0;
  };
  const returnValues = fields => ({
    userName: fields.userName.value,
    password: fields.password.value
  });
  const onSubmit = () => {
    if (validateForm()) {
      props.submitLogin(returnValues(fields));
    } else {
      console.log("faltan campos amigo");
    }
  };
  return (
    <Wrapper>
      <Form>
        <H1>Iniciar sesión</H1>
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
      </Form>
    </Wrapper>
  );
};
LoginPage.propTypes = {
  submitLogin: propTypes.func,
  user: propTypes.object
};
const mapDispatchToProps = dispatch => ({
  submitLogin: credentials => {
    dispatch(loginUser(credentials));
  }
});
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
