/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 负数不可能
  // 4的幂次方二进制1都在奇数位
  // parseInt('10101010101010101010101010101010', 2)
  return n > 0 && (n & (n - 1)) === 0 && (n & 2863311530) === 0;
};
