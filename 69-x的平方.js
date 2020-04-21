/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
  const l = (x + '').length; // 数字的长度
  const p = (l + 1) >> 1; // l / 2
  let left = Number(('1'+ '0'.repeat(p - 1)));
  let right = Number(('1' + '0'.repeat(p)));

  if (right > x) {
    right = x;
  }

  while(left !== right) {
    let mid = (left + right) >> 1;
    let mid2 = mid * mid;

    if (mid2 > x) {
      right = mid;
    } else {
      left = mid;
    }

    if (right - left === 1 || mid2 === x) {
      right = left;
    }
  }
  
  return left;
};