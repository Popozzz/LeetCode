/**
 * @param {string} s
 * @return {number}
 */
// 动态规划
var longestPalindromeSubseq = function (s) {
  var dp = new Array(s.length).fill(1).map(() => []); // dp i, j是i到j的最大值
  var len = s.length;

  function long(left, right) {
    if (left > right) {
      return 0;
    }

    if (dp[left][right]) {
      return dp[left][right];
    }

    if (s[left] === s[right]) {
      dp[left][right] = long(left + 1, right - 1) + (left === right ? 1 : 2);
    } else {
      dp[left][right] = Math.max(long(left + 1, right), long(left, right - 1));
    }

    return dp[left][right];
  }

  long(0, len - 1);
  return dp[0][len - 1];
};
