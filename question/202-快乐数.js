/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const numSet = new Set()
  let sum = 0
  let num = n
  while (n) {
    if (numSet.has(num)) {
      return false
    }
    const rest = n % 10
    sum += rest * rest

    n = (n - rest) / 10

    if (n === 0) {
      if (/^1{1}[0]*$/.test(sum)) return true
      numSet.add(num)
      n = sum
      num = n
      sum = 0
    }
  }
}
