/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if (numRows === 1) return s
  
  var line = 0, i = 0;
  var result = new Array(numRows).fill(true).map(() => ([]))
  var add = true
  while (i < s.length) {
      result[line].push(s[i])

      if (line === numRows - 1) {
          add = false
      }

      if (line === 0) {
          add = true
      }

      if (add) {
          line ++
      } else {
          line --
      }
      i ++;
  }

  return result.reduce((result, arr) => {
      result += arr.join('')
      return result
  }, '')
};