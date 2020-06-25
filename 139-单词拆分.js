/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var wordMap = {};
  var arr = s.split('');

  for (var i=0; i<wordDict.length; i++) {
      wordMap[wordDict[i]] = true;
  }

  var dp = [true];
  for (var i=1; i<=arr.length; i++) {
      for (var j=0; j<i; j++) {
          if (dp[j] && wordMap[s.substring(j, i)]) {
              dp[i] = true;
              break;
          }
      }
      
  }

  return dp[arr.length] === true;
};