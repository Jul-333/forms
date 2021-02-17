import { message } from "../../helpers/constants";

export const checkEqualPasswords = (password, passwordTwo) => {
  if (password !== passwordTwo) {
    return {
      error: true,
      messageSmall: message.NOT_EQUAL_PASSWORDS,
      messageBig: message.NOT_EQUAL_PASSWORDS,
    };
  }
  return false;
};

export const checkPassword = (value) => {
  // "The password should only consist of numbers and letters of the Latin alphabet"
  const regexp1 = /[^\dA-Z]/gi;
  const notLatinAlphabet = value.match(regexp1);
  if (notLatinAlphabet) {
    return {
      error: true,
      messageSmall: message.INCORRECT_PASSWORD,
      messageBig: message.LATIN_ALPHABET,
    };
  }

    // "At least 8 characters"
    if (value.length < 8) {
      return {
        error: true,
        messageSmall: message.SMALL_LENGTH,
        messageBig: message.SMALL_LENGTH,
      };
    }
    
  //   "Password must contain at least 1 number, 1 uppercase and 1 uppercase letter"
  const regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const validAlphabet = regexp2.test(value);
  if (!validAlphabet) {
    return {
      error: true,
      messageSmall: message.INCORRECT_PASSWORD,
      messageBig: message.MIN_LET_NUMB,
    };
  }

  return false;
};
