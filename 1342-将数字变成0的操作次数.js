/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  var step = 0;

  while (num > 0) {
    if ((num & 1) === 0) {
        num >>= 1;
    } else {
        num -= 1;
    }
    step ++;
  }

  return step;
};