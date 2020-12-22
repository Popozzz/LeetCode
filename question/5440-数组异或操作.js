/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  var result = 0;
  
  for (var i=0; i<n; i++) {
    var num = start + 2*i;
    result = result ^ num;
  }
  
  return result;
};