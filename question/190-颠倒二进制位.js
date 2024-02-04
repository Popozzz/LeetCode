/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let result = 0
  let i = 1;
  while(i <= 32) {
    const num = n & 1;
    result = (result * 2) + num;
    n = n >> 1;
    i++;
  }

  return result
};