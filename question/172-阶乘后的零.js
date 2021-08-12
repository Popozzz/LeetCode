/**
 * @param {number} n
 * @return {number}
 */

function getZeroes(num) {
  let count = 0;

  while (num >= 5) {
    const last = num % 10;
    if (last === 0) {
      count++;
      num = num / 10;
    } else if (last === 5) {
      num = num * 2;
    } else {
      break;
    }
  }

  return count;
}
var trailingZeroes = function (n) {
  var i = 5;
  var count = 0;

  while (i <= n) {
    count = count + getZeroes(i);
    i = i + 5;
  }

  return count;
};
