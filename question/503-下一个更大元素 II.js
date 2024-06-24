/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const length = nums.length
  const listLength = length * 2
  const list = [...nums, ...nums]
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = -1
    for (let j = i + 1; j < listLength; j++) {
      if (list[j] > list[i]) {
        result[i] = list[j]
        break
      }
    }
  }

  return result
}
