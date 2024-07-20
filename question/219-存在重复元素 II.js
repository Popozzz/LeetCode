/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numMap = new Map()
  const length = nums.length

  for (let i = 0; i < length; i++) {
    const num = nums[i]
    const target = numMap.get(num)

    if (target != null && i - target <= k) return true
    numMap.set(num, i)
  }

  return false
}
