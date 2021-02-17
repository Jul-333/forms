import React, { Component } from "react";
import "./SignInForm.css";
import "./Forms.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import validation from "../../validation/validation";
import { ERRORS_STATE } from "./objDefaultState";
import { calcDisabledSignIn } from "../../helpers/calcDisabled";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      ...ERRORS_STATE.SIGN_IN,
    };
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isValid = (event) => {
    const nameEl = event.target.name;
    const objError = validation(nameEl, event.target.value);
    const nameProp = `${nameEl}Error`;
    this.setState({ [nameProp]: objError });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log({ Email: email, Пароль: password });
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    const disabled = calcDisabledSignIn({ ...this.state });

    return (
      <form
        name="sign-in"
        className="form form-sign-in"
        onSubmit={this.onSubmit}
      >
        <Input
          labelName={"Введите E-mail"}
          name={"email"}
          value={email}
          type={"text"}
          onChange={this.onChange}
          onBlur={this.isValid}
          placeholder={"E-mail"}
          errorObj={this.state.emailError}
        />
        <Input
          labelName={"Введите пароль"}
          name={"password"}
          value={password}
          type={"password"}
          onChange={this.onChange}
          onBlur={this.isValid}
          placeholder={"Пароль"}
          icon={"true"}
          errorObj={this.state.passwordError}
        />
        <button className="reset-password">Забыли пароль?</button>
        <Button type="submit" disabled={disabled} nameButton={"Войти"} />
      </form>
    );
  }
}

export default SignInForm;
