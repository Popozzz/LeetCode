/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  if (dividend <= -2147483648) {
      if (divisor === 1) {
          return -2147483648
      }

      if (divisor === -1) {
          return 2147483647
      }
  }
  
  let isPositive = (dividend ^ divisor) >= 0
  // 取绝对值
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  const nrr = (dividend + '').split('')
  
  let i = 0
  let current = 0
  let result = ''

  while (i<nrr.length) {
      current = current * 10 + Number(nrr[i])

      if (current >= divisor) {
          let count = 0
          while (current >= divisor) {
              current = current - divisor
              count ++
          }

          result = result + count
      } else {
          result = result + '0'
      }

      i++
  }

  return isPositive? +result : -result
};