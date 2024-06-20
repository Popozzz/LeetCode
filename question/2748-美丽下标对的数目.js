/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  const firstArr = []
  const lastArr = []
  const length = nums.length
  const countArr = new Array(10).fill(0)

  for (let i = 0; i < length; i++) {
    const value = nums[i]
    const rest = value % 10
    firstArr.push(Number(`${value}`[0]))
    lastArr.push(rest)

    countArr[rest]++
  }

  let total = 0
  for (let i = 0; i < length; i++) {
    const first = firstArr[i]
    const last = lastArr[i]
    countArr[last]--

    const rest = length - i - 1

    if (first === 1) {
      total += rest
      continue
    }
    total += countArr[1]
    switch (first) {
      case 2:
        total += countArr[3] + countArr[5] + countArr[7] + countArr[9]
        break
      case 3:
        total +=
          countArr[2] + countArr[4] + countArr[5] + countArr[7] + countArr[8]
        break
      case 4:
        total += countArr[3] + countArr[5] + countArr[7] + countArr[9]
        break
      case 5:
        total +=
          countArr[2] +
          countArr[3] +
          countArr[4] +
          countArr[6] +
          countArr[7] +
          countArr[8] +
          countArr[9]
        break
      case 6:
        total += countArr[5] + countArr[7]
        break
      case 7:
        total +=
          countArr[2] +
          countArr[3] +
          countArr[4] +
          countArr[5] +
          countArr[6] +
          countArr[8] +
          countArr[9]
        break
      case 8:
        total += countArr[3] + countArr[5] + countArr[7] + countArr[9]
        break
      case 9:
        total +=
          countArr[2] + countArr[4] + countArr[5] + countArr[7] + countArr[8]
        break
      default:
        break
    }
  }

  return total
}
