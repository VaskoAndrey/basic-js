const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

 function countCats(matrix ) {
   const cats = [];
   for(let prop of matrix) {
      cats.push(prop.filter(item => item == '^^'));

   }
   return cats.reduce((sum,current) => sum + current.length, 0)
}


module.exports = {
  countCats
};
