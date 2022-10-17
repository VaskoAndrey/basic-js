const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For   should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = str.split('');
  let result;
  let resObj = {};
  let obj = {};
  
  strArr.forEach(function(key) {
      if(!(key in resObj)) {
          resObj[key] = [key];
      } else if(key in resObj) {
          resObj[key].push(key);
      }
  })
  for(let key in resObj) {
    obj[key] = resObj[key].length;
}

  const strobj = []

Object.entries(obj).forEach(([key, value]) => {
  strobj.push([value, key])
})
  let strResult = Object.entries(strobj).join('').split(',').join('')
  return strResult
}


module.exports = {
  encodeLine
};
