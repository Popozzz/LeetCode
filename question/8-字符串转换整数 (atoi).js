/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const arr = s.split('')
  const length = arr.length
  const result = []
  let positive = true

  for (let i = 0; i < length; i++) {
    const char = arr[i]
    let breakFor = false

    switch (char) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        result.push(char)
        break
      case '-':
      case '+':
        if (result.length <= 0) {
          result.push(char)
        } else {
          breakFor = true
        }
        break
      default:
        breakFor = char !== ' ' || result.length > 0
        break
    }

    if (breakFor) {
      break
    }
  }

  if (result[0] === '+' || result[0] === '-') {
    positive = result[0] === '+'
    result.shift()
  }

  const resultStr = result.join('')
  const resultNum = Number(resultStr.replace(/^0+|\.+/g, '').slice(0, 11))
  const num = positive ? resultNum : -resultNum

  if (num > 2147483647) {
    return 2147483647
  }
  if (num < -2147483648) {
    return -2147483648
  }

  return num
}
