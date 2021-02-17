import React, { Component } from "react";
import "./SignUpForm.css";
import "./Forms.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SelectEl from "../Select/Select";
import Checkbox from "../Checkbox/Checkbox";
import { ERRORS_STATE } from "./objDefaultState";
import validation from "../../validation/validation";
import { calcDisabledSignUp } from "../../helpers/calcDisabled";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      password: "",
      passwordRepeat: "",
      region: "",
      checkbox: false,
      ...ERRORS_STATE.SIGN_UP,
    };
  }

  onChange = (event) => {
    if (event.value) {
      this.setState({ region: event.value });
    } else {
      const nameEl = event.target.name;
      nameEl !== "checkbox"
        ? this.setState({ [nameEl]: event.target.value })
        : this.setState((prevState) => {
            return { [nameEl]: !prevState.checkbox };
          });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { email, phone, password, region, checkbox } = this.state;
    console.log({
      "E-mail": email,
      Телефон: phone,
      Пароль: password,
      Регион: region,
      "Приятно соглашение": checkbox,
    });
    this.setState({
      email: "",
      phone: "",
      password: "",
      passwordRepeat: "",
      region: "",
    });
  };

  isValid = (event) => {
    if (event === "region") {
      const objError = validation(event, this.state.region);
      return this.setState({ regionError: objError });
    }
    const nameEl = event.target.name;
    const objError = validation(nameEl, event.target.value, { ...this.state });
    this.setState({ [`${nameEl}Error`]: objError });
  };

  render() {
    const {
      email,
      password,
      phone,
      passwordRepeat,
      checkbox,
      region,
    } = this.state;

    const disabled = calcDisabledSignUp({ ...this.state });

    return (
      <form
        name="sign-up"
        onSubmit={this.onSubmit}
        className="form form-sign-up"
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
          labelName={"Введите телефон"}
          name={"phone"}
          value={phone}
          type={"text"}
          onChange={this.onChange}
          onBlur={this.isValid}
          placeholder={"Телефон"}
          errorObj={this.state.phoneError}
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
        <Input
          labelName={"Повторите пароль"}
          name={"passwordRepeat"}
          value={passwordRepeat}
          type={"password"}
          onChange={this.onChange}
          onBlur={this.isValid}
          placeholder={"Пароль"}
          icon={"true"}
          errorObj={this.state.passwordRepeatError}
        />

        <SelectEl
          labelName={"Выберите регион"}
          value={region}
          onChange={this.onChange}
          onBlur={this.isValid}
          errorObj={this.state.regionError}
        />
        <Checkbox
          onChange={this.onChange}
          onBlur={this.isValid}
          errorObj={this.state.checkboxError}
          value={checkbox}
        />
        <Button
          type="submit"
          disabled={disabled}
          nameButton={"Зарегистрироваться"}
        />
      </form>
    );
  }
}

export default SignUpForm;
