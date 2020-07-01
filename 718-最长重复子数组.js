/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  var n = A.length;
  var m = B.length;
  var dp = [[0]];
  var max = 0;

  if (n === 0 || m === 0) {
      return 0;
  }

  dp[n] = [];
  for (var i= n-1; i>=0; i--) {
      for (var j=m-1; j>=0; j--) {
          if (dp[i] == null) {
              dp[i] = [];
          }
          if (A[i] === B[j]) {
              dp[i][j] = A[i] == B[j] ? (dp[i + 1][j + 1] || 0) + 1 : 0;
              if (dp[i][j] > max) {
                  max = dp[i][j];
              }
          }
      }
  }

  return max;
};