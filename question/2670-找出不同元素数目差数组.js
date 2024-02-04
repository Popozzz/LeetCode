/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const leftDiff = []
  const leftSet = new Set()
  const rightDiff = []
  const rightSet = new Set()
  const len = nums.length

  for (let i = 0; i < len; i++) {
    leftSet.add(nums[i])
    leftDiff[i] = leftSet.size
  }

  for (let j = len - 1; j >= 0; j--) {
    rightDiff[j] = rightSet.size
    rightSet.add(nums[j])
  }

  const diffList = []
  for (let i = 0; i < len; i++) {
    const diff = leftDiff[i] - rightDiff[i]
    diffList.push(diff)
  }

  return diffList
}
