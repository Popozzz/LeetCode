/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  let restMoney = money - 8
  let restChildren = children - 1
  let prefectChildren = 0

  while (restMoney >= restChildren) {
    prefectChildren++

    if (restChildren === 1) {
      if (restMoney === 4) {
        prefectChildren--
      }

      if (restMoney === 8) {
        prefectChildren++
      }
      break
    }

    restMoney -= 8
    restChildren--
  }

  return money >= children ? prefectChildren : -1
}
