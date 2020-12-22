/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  var arr = [];
  var visited = {};
  var i = k;
  
  while (i>=0) {
      let result = shorter * i + (k-i)*longer;
      if (!visited[result] && result > 0) {
          arr.push(result);
          visited[result] = true;
      }
      
      i--;
  }

  return arr;
};