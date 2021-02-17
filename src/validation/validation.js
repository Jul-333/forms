import { checkEmail } from "./helpers/checkEmail";
import { checkCheckbox, checkEmptyField } from "./helpers/checkEmptyField";
import { checkPassword, checkEqualPasswords } from "./helpers/checkPassword";
import { checkPhone } from "./helpers/checkPhone";

const validation = (name, value, state) => {
  if (name === "checkbox") {
    const result = checkCheckbox(state.checkbox);
    if (result !== true) {
      return result;
    }
    return { error: false };
  }

  const result1 = checkEmptyField(value);
  if (result1 !== false) {
    return result1;
  }

  if (name === "email") {
    const result2 = checkEmail(value);
    if (result2 !== false) {
      return result2;
    }
  }

  if (name === "password") {
    const result3 = checkPassword(value);
    if (result3 !== false) {
      return result3;
    }
  }

  if (name === "passwordRepeat") {
    const { password } = state;
    const result4 = checkEqualPasswords(password, value);
    if (result4 !== false) {
      return result4;
    }
  }

  if (name === "phone") {
    const result5 = checkPhone(value);
    if (result5 !== false) {
      return result5;
    }
  }

  return { error: false };
};

export default validation;
