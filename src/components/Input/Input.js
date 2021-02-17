import React, { Component } from "react";
import lock from "../../images/lock.png";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      typeInput: props.type,
    };
  }

  clickIcon = () => {
    const { showPassword } = this.state;
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  addIcon = (hasError) => {
    const styleIcon = !hasError
      ? "input-img-default input-img"
      : "input-img-error input-img";

    return (
      <img
        src={lock}
        className={styleIcon}
        alt="lock-icon"
        onClick={this.clickIcon}
      />
    );
  };

  addError = (errorObj) => {
    const { messageSmall, messageBig } = errorObj;
    return (
      <div className="arrow-error">
        <p className="error-small-message">{messageSmall}</p>
        <p className="error-big-message">{messageBig}</p>
      </div>
    );
  };

  render() {
    const { name, value, onChange, onBlur, placeholder, errorObj } = this.props;
    const { showPassword, typeInput } = this.state;
    const classInput = errorObj.error
      ? "input input-error"
      : "input input-default";
    const hasError = errorObj.error;
    let newType = typeInput;
    if (newType === "password") {
      newType = !showPassword ? "password" : "text";
    }

    return (
      <label>
        {this.props.labelName}
        <br />
        <div className="wrapper-input">
          <input
            className={classInput}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={newType}
            placeholder={placeholder}
          />
          {hasError ? this.addError(errorObj) : null}
          {this.props.icon ? this.addIcon(hasError) : null}
        </div>
      </label>
    );
  }
}

export default Input;

// import React, { Component } from "react";

// import lock from "../../images/lock.png";
// import "./Input.css";
// // error: true, type: "empty", message: message.EMPTY_FIELD
// class Input extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showPassword: false,
//       typeInput: props.type,
//       // hasError: props.errorObj.error,
//       // typeError: props.errorObj.type ? props.errorObj.type : false,
//       // messageError: props.errorObj.message ? props.errorObj.message : false,
//     };
//   }

//   clickIcon = () => {
//     const { showPassword } = this.state;
//     this.setState((prevState) => ({
//       showPassword: !prevState.showPassword,
//     }));
//   };

//   addIcon = () => {
//     return (
//       <img
//         src={lock}
//         className="input-img"
//         alt="lock-icon"
//         onClick={this.clickIcon}
//       />
//     );
//   };

//   render() {
//     const {
//       icon,
//       name,
//       value,
//       onChange,
//       onBlur,
//       placeholder,
//       labelName,
//       errorObj,
//     } = this.props;
//     const { hasError } = errorObj;

//     const { showPassword, typeInput } = this.state;
//     console.log("this.state;", this.state);

//     let newType = typeInput;
//     if (newType === "password") {
//       newType = !showPassword ? "password" : "text";
//     }

//     return (
//       <label>
//         {labelName}
//         <br />
//         <div className="wrapper-input">
//           {hasError?
//           <input
//             className="input"
//             name={name}
//             value={value}
//             onChange={onChange}
//             onBlur={onBlur}
//             type={newType}
//             placeholder={placeholder}
//           />
//           {icon ? this.addIcon() : null}
//         </div>
//       </label>
//     );
//   }
// }

// export default Input;
