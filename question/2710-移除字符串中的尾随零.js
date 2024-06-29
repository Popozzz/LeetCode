/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  const numArr = num.split('')
  let i = numArr.length - 1
  for (; i > 0; i--) {
    if (numArr[i] === '0') {
      numArr[i] = ''
    } else {
      break
    }
  }

  return numArr.join('')
}
