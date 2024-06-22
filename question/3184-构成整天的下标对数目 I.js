/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  const length = hours.length
  let count = 0
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const day = (hours[i] + hours[j]) % 24
      if (day === 0) {
        count++
      }
    }
  }

  return count
}
