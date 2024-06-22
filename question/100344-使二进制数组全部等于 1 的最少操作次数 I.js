/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const length = nums.length
  let count = 0

  for (let i = 0; i <= length - 3; i++) {
    if (nums[i] !== 1) {
      count++
      let j = i
      while (j <= i + 2 && j < length) {
        nums[j] = nums[j] === 0 ? 1 : 0
        j++
      }
    }
  }

  return nums.some((num) => num === 0) ? -1 : count
}
