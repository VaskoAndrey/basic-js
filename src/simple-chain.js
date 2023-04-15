const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
class ChainMaker {
  constructor() {
    this.chain = [];
  }

  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  }

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  }

  reverseChain() {
    this.chain.reverse();
    return this;
  }

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }

  getLength() {
    return this.chain.length;
  }
}

const chainMaker = new ChainMaker();


module.exports = {
  chainMaker
};
