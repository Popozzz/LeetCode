/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var strArr = s.split('');
  var i = 0, l = strArr.length - 1;
  var result = 0;
  for (i = l; i >= 0; i--) {
    if (strArr[i] === ' ' && result !== 0) break;
    if (strArr[i] !== ' ') {
      result ++;
    }
  }

  return result;
};