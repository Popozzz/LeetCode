/**
 * @param {number} n
 * @return {number}
 */
var resultMap = {
  0: 0,
  1: 1,
  2: 1,
};

var tribonacci = function (n) {
  if (resultMap[n] != null) return resultMap[n];

  resultMap[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);

  return resultMap[n];
};
