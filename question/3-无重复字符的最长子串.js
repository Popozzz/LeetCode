/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var arr = s.split('');
  var curLength = 0;
  var maxLength = 0;
  
  var map = {};
  
  for(var i=0; i<arr.length;) {
    if (map[arr[i]] == null) {
      map[arr[i]] = i;
      curLength ++;
      i++;
    } else {
      i = map[arr[i]] + 1; // 回退上一个不冲突的索引
      curLength = 0;
      map = {};
    }
    
    if (curLength > maxLength) {
      maxLength = curLength;
    }
  }
  
  return maxLength;
};