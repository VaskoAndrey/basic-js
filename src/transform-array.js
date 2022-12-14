const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   if(!Array.isArray(arr)) {
      throw new Error('\'arr\' parameter must be an instance of the Array!')
      return false;
   }
   let result = arr;
   for(let i = 0; i < arr.length; i++) {
      if(typeof arr[i] !== 'number') {
         continue;
      }
      if(arr[i] == '--discard-next') {
         if(i == arr.length - 1) {
            result.splice(i, 1);
            continue;
         }
         result.splice(i + 1, 1);
      }
      if(arr[i] == '--discard-prev') {
         if(i == 0) {
            result.splice(i, 1);
            continue;
         }
         result.splice(i - 1, 1);
      }
      if(arr[i] == '--double-next') {
         if(i == arr.length - 1) {
            result.splice(i, 1);
            continue;
         }
         result.splice(i + 1, 0, arr[i + 1]);
      }
      if(arr[i] == '--double-prev') {
         if(i == 0) {
            result.splice(i, 1);
            continue;
         }
         result.splice(i - 1, 0, arr[i - 1]);
      }
   }
   for (let i = 0; i < result.length; i++) {
      if(arr[i] == '--discard-next') {
         if(i == arr.length - 1) {
            continue;
         }
      if(arr[i] == '--discard-prev') {
         if(i == 0) {
            continue;
         }
      if(arr[i] == '--double-next') {
         if(i == arr.length - 1) {
            continue;
         }
      if(arr[i] == '--double-prev') {
         if(i == 0) {
            continue;
         }
      if(typeof arr[i] == 'string') result.splice(i, 1)
   }
   return result;
}}}}}

module.exports = {
  transform
};
