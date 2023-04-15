const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const numString = n.toString();

  let maxNum = parseInt(numString[0]);

  for (let i = 0; i < numString.length; i++) {
    // remove the current digit from the string
    const withoutDigit = numString.slice(0, i) + numString.slice(i + 1);

    const numWithoutDigit = parseInt(withoutDigit);
    if (numWithoutDigit > maxNum) {
      maxNum = numWithoutDigit;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
