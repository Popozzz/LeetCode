/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const length = nums.length
  let count = 0

  for (let i = 0; i < length; i++) {
    if (nums[i - 1] !== 0 && nums[i] === 0) {
      count++
    }

    if (nums[i - 1] === 0 && nums[i] === 1) {
      count++
    }
  }

  return count
}
