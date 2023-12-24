const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let stuck = [];
  let minusArray = [];
  let numberArray = [];
  
      for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[ i ] === -1 ) {
              minusArray.push( arr[ i ] );
          } else {
              numberArray.push( arr[ i ] )
          }
      }

      numberArray.sort(function (a, b) {
          return b - a;
      })
      for ( let i = 0; i < arr.length; i++ ) {
          if ( arr[ i ] === -1 ) {
              stuck.push(minusArray.pop());
          } else {
              stuck.push(numberArray.pop());
          }
          }
      return stuck;
}

module.exports = {
  sortByHeight
};
