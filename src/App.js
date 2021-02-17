import React, { Component } from "react";
import "./App.css";
import close from "./images/close.png";
import SignInForm from "./components/Forms/SignInForm";
import SignUpForm from "./components/Forms/SignUpForm";

const ACTIVE_COLOR = { background: "white" };
const NOT_ACTIVE_COLOR = { background: "#EFF2F7" };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: "Sign-In",
      activeSignIn: true,
      activeSignUp: false,
    };
  }

  changeState = (value) => {
    this.setState((prevState) => {
      if (prevState.activeForm !== value) {
        return {
          activeSignIn: !prevState.activeSignIn,
          activeSignUp: !prevState.activeSignUp,
          activeForm: value,
        };
      }
    });
  };

  onClickForm = (value) => {
    this.changeState(value);
  };

  handleKeyDown = (event, value) => {
    if (event.key === "Enter") {
      this.changeState(value);
    }
  };

  render() {
    const { activeForm, activeSignIn, activeSignUp } = this.state;
    const classSignIn = activeSignIn ? ACTIVE_COLOR : NOT_ACTIVE_COLOR;
    const classSignUp = activeSignUp ? ACTIVE_COLOR : NOT_ACTIVE_COLOR;

    return (
      <div className="container">
        <div className="form-names-block">
          <div
            className="name-form name-sign-in"
            onClick={() => this.onClickForm("Sign-In")}
            onKeyDown={(event) => this.handleKeyDown(event, "Sign-In")}
            style={classSignIn}
            tabIndex="0"
          >
            <p>Вход</p>
          </div>
          <div
            className="name-form name-sign-up"
            onClick={() => this.onClickForm("Sign-Up")}
            onKeyDown={(event) => this.handleKeyDown(event, "Sign-Up")}
            style={classSignUp}
            tabIndex="0"
          >
            <p>Регистрация</p>
          </div>
          <button className="button-close">
            <img src={close} alt="close-icon" className="button-close-icon" />
          </button>
        </div>

        <div className="form-block">
          {activeForm === "Sign-In" ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    );
  }
}

export default App;
