/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const length = nums.length
  const backupSet = new Set()
  const duplicateSet = new Set()
  for (let i = length - 1; i >= 0; i--) {
    const num = nums[i]
    if (duplicateSet.has(num)) {
      nums.splice(i, 1)
    }

    if (backupSet.has(num)) {
      duplicateSet.add(num)
    } else {
      backupSet.add(num)
    }
  }

  return nums.length
}
