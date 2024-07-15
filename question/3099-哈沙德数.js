/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sum = 0
  let num = x
  while (num) {
    const rest = num % 10
    sum += rest
    num = (num - rest) / 10
  }

  if ((x / sum) % 1 === 0) {
    return sum
  }

  return -1
}
