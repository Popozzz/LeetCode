/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  // 一个循环
  const circle = n + n - 2
  const restTime = time % circle

  if (restTime === 0) {
    return 1
  }

  if (restTime < n) {
    return restTime + 1
  }

  return n - (restTime % n) - 1
}
