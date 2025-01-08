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
function countCats(matrix) {
  let counter = 0;
  function checkArr(arr, i = 0) {
    if(i > arr.length - 1) {
      return;
    }
    if(arr[i] === '^^') {
      counter += 1;
      
    } 
    return checkArr(arr, i + 1);
  }
  function checkMatrix(matrix, i = 0) {
    if(i > matrix.length - 1) {
      return;
    }
    checkArr(matrix[i])
    return checkMatrix(matrix, i + 1);
  }
  checkMatrix(matrix)
  return counter;
}

module.exports = {
  countCats
};
