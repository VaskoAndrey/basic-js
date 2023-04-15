const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const parts = inputString.split('-');
  if (parts.length !== 6) {
    return false;
  }
  for (let i = 0; i < 6; i++) {
    const part = parts[i];
    if (part.length !== 2) {
      return false;
    }
    for (let j = 0; j < 2; j++) {
      const charCode = part.charCodeAt(j);
      if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 70) && !(charCode >= 97 && charCode <= 102)) {
        return false;
      }
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
