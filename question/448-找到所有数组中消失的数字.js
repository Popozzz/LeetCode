/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const len = nums.length
  const arr = new Array(len).fill(undefined)
  const result = []

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    arr[num - 1] = num
  }

  for (let i = 0; i < len; i++) {
    if (arr[i] == undefined) {
      result.push(i + 1)
    }
  }

  return result
}
