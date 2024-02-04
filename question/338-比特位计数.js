/**
 * @param {number} n
 * @return {number[]}
 */
var getCount = function (n) {
  var count = 0;
  while (n) {
    // 判断是奇数
    if (n & (1 === 1)) {
      count++;
    }

    n = n >> 1;
  }

  return count;
};

var countBits = function (n) {
  var start = 1;
  var count = 0;
  var ans = [0];

  while (start <= n) {
    // 判断是奇数
    if (start & (1 === 1)) {
      count++;
    } else {
      count = getCount(start);
    }

    ans.push(count);
    start++;
  }

  return ans;
};
