/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  const max = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanStr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let str = ''
  let startIndex = 0;
  
  while(num > 0) {
      while(startIndex < max.length) {
          if (num >= max[startIndex]) {
              break;
          }
          startIndex ++
      }
      num -= max[startIndex]
      str += romanStr[startIndex]
  }

  return str
};