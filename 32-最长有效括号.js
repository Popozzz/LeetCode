/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var arr = s.split('');
  var stack = [-1];
  var max = 0;

  for (var i=0; i<arr.length; i++) {
      if (arr[i] === '(') {
          stack.push(i);
      } else {
          stack.pop();
          let l = stack.length;
          if (l === 0) {
              stack.push(i);
          } else {
              let minus = i - stack[l-1];
              max = minus>max? minus : max;
          }
      }
  }

  return max;
};