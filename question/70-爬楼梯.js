/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  if (n <= 2) return n;

  let a2 = 2, a1 = 1;
  let i = 3;
  let result = 0;

  while(i <= n) {
    result = a2 + a1;
    a1 = a2;
    a2 = result;
    i++;
  }

  return result;
};