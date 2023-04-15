const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = !reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[A-Z]/)) {
        const keyChar = key[j % key.length];
        const shift = (char.charCodeAt(0) + keyChar.charCodeAt(0)) % 26;
        const encryptedChar = String.fromCharCode(shift + 65);
        result += encryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.reverse ? result.split('').reverse().join('') : result;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[A-Z]/)) {
        const keyChar = key[j % key.length];
        const shift = (char.charCodeAt(0) + 26 - keyChar.charCodeAt(0)) % 26;
        const decryptedChar = String.fromCharCode(shift + 65);
        result += decryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.reverse ? result.split('').reverse().join('') : result;
  }
}


module.exports = {
  VigenereCipheringMachine
};
