/**
 * @param {string} digits
 * @return {string[]}
 */
 const digitsMap = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m','n','o'],
  7: ['p','q','r', 's'],
  8: ['t','u','v'],
  9: ['w','x','y', 'z']
}
var letterCombinations = function(digits) {
  var drr = digits.split('')
  const lenArr = drr.map(d => digitsMap[d])
  var result = []
  lenArr.forEach((srr) => {
      let temp = []
      srr.forEach(s => {
          if (!result.length) {
              temp.push(s)
          } else {
              result.forEach(str => {
                  temp.push(str + s)
              })
          }
      })

      result = temp
  })

  return result
};