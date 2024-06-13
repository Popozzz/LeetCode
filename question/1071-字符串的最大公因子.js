/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const length1 = str1.length
  const length2 = str2.length
  const minStr2 = length1 > length2 ? str2 : str1
  let result = minStr2
  let repeatStr = result
  let match1 = false
  let match2 = false

  while(result) {
    if (result === str1) {
      match1 = true
    }

    if (result === str2) {
      match2 = true
    }

    if (match1 && match2) {
      return repeatStr
    }

    if (result.length > length1 && result.length > length2) {
      result = repeatStr.substring(1)
      repeatStr = result
      match1 = false
      match2 = false
    } else {
      result += repeatStr 
    }
  }

  return ''
};