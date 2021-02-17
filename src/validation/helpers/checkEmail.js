import { message } from "../../helpers/constants";

// It checks if email is incorrect
export const checkEmail = (email) => {
  const regex = /^[-._a-z0-9]+@([a-z]+\.)+[a-z]{2,6}$/;
  const isValid = regex.test(email);

  return isValid
    ? false
    : {
        error: true,
        messageSmall: message.INCORRECT_EMAIL,
        messageBig: message.INCORRECT_EMAIL,
      };
};
