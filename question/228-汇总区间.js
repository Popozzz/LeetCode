/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const length = nums.length
  const result = []
  let pointer = 0
  for (let i = 0; i < length; i++) {
    const current = result[pointer]
    const num = nums[i]
    if (current == null) {
      result[pointer] = [num, num]
    } else {
      if (current[1] === num - 1) {
        current[1] = num
      } else {
        pointer++
        result[pointer] = [num, num]
      }
    }
  }

  return result.map(([num1, num2]) =>
    num1 === num2 ? `${num1}` : `${num1}->${num2}`
  )
}
