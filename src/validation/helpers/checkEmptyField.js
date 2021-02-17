import { message } from "../../helpers/constants";

export const checkEmptyField = (value) => {
  const regex = /^\s*$/;
  const isEmpty = regex.test(value);

  return !isEmpty
    ? false
    : {
        error: true,
        messageSmall: message.EMPTY_FIELD,
        messageBig: message.EMPTY_FIELD,
      };
};

export const checkCheckbox = (value) => {
  return value
    ? false
    : {
        error: true,
        messageSmall: message.EMPTY_FIELD,
        messageBig: message.NOT_ACCEPTED_AGREEMENT,
      };
};
