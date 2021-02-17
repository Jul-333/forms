export const calcDisabledSignUp = (state) => {
  const {
    emailError,
    phoneError,
    passwordError,
    passwordRepeatError,
    regionError,
    checkboxError,
    email,
    password,
    phone,
    passwordRepeat,
    checkbox,
    region,
  } = state;

  const arr1 = [
    emailError,
    phoneError,
    passwordError,
    passwordRepeatError,
    regionError,
    checkboxError,
  ];

  const arr2 = [email, password, phone, passwordRepeat, checkbox, region];

  const result1 = arr1.some((element) => element.error === true);
  const result2 = arr2.some((element) => element === "" || element === false);

  return result1 || result2 ? true : false;
};

export const calcDisabledSignIn = (state) => {
  const { emailError, passwordError, email, password } = state;

  const arr1 = [emailError, passwordError];
  const arr2 = [email, password];

  const result1 = arr1.some((element) => element.error === true);
  const result2 = arr2.some((element) => element === "");

  return result1 || result2 ? true : false;
};
