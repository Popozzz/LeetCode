/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length

  let prev = nums[0]
  let result = prev === target ? 0 : -1

  let rotateIndex = -1
  for (let i = 1; i < len; i++) {
    if (rotateIndex === -1 && nums[i] < prev) {
      rotateIndex = i - 1

      // 如果数组最大值<target，提前退出
      if (target > prev) {
        break
      }
    }

    // 后半升序数组>target值，提前退出
    if (rotateIndex > -1 && nums[i] > target) {
      break
    }

    if (nums[i] === target) {
      result = i
    }
    prev = nums[i]
  }

  return result
}
