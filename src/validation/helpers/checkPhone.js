import { message } from "../../helpers/constants";

export const checkPhone = (value) => {
  const regex = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/g;
  const isValid = regex.test(value);
  return isValid
    ? false
    : {
        error: true,
        type: "empty",
        messageSmall: message.INCORRECT_PHONE_SHORT,
        messageBig: message.INCORRECT_PHONE,
      };
};
