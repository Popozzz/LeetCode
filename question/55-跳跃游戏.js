/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const length = nums.length
  let maxDistance = 0

  if (length === 1) return true

  for (let i = 0; i <= maxDistance; i++) {
    maxDistance = Math.max(maxDistance, nums[i] + i)
    if (maxDistance >= length - 1) return true
  }

  return false
}
