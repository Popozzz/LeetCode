/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 偶数和负数不可能是3的幂次方
  if ((n & 1) === 0 || n < 1) return false;

  let flag = true;

  while (n > 1) {
    n = n / 3;
    if (n !== (n | 0)) {
      flag = false;
      break;
    }
  }

  return flag;
};
