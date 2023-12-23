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
function transform( arr ) {
  const result = [];
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
  if (arr.length === 0) {
    return [];
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      continue;
    }
    if (arr[i] === '--discard-prev') {
      if (result[result.length - 1] === arr[i-1]) {
        result.pop();
        continue;
      } else {
        continue;
      }
    }
    if(arr[i] === '--double-prev') {
      if (result[result.length - 1] === arr[i-1] && arr[i-1]) {
        result.push(arr[i-1])
        continue;
      } else {
        continue;
      }
    }
    if(arr[i] === '--double-next') {
      if (arr[i+1]) {
        result.push(arr[i+1])
        continue;
      } else {
        continue;
      }
    }
    result.push(arr[i])
  }
  return result;
}
module.exports = {
  transform
};

