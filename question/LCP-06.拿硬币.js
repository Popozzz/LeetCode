/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  return coins.reduce((sum, coin) => {
    if (coin & (1 > 0)) {
      sum += 1
      coin--
    }
    sum += coin / 2

    return sum
  }, 0)
}
