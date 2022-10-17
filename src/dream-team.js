const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   if(!Array.isArray(members)) return false;
   if(members == undefined) return false;
   let coolTeam = [];
   for (let prop of members) {
      if(typeof prop !== 'string') continue;
      coolTeam.push(prop.trim()[0].toUpperCase());
   }
   return (coolTeam[0] == undefined) ? false : coolTeam.sort().join('');
}

module.exports = {
  createDreamTeam
};
