/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const length = nums.length
  let count = 0
  for (let i = 0; i < length; i++) {
    const num = nums[i]
    const rest = num % 3
    if (rest !== 0) {
      count++
    }
  }

  return count
}
