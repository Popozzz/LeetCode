/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const length = nums.length
  let result = []

  let i = 1
  result.push([nums[0]])

  while (i < length) {
    const num = nums[i]

    let newResult = []
    result.forEach((arr) => {
      for (let j = 0; j <= arr.length; j++) {
        let brr = [...arr]
        brr.splice(j, 0, num)
        newResult.push(brr)
      }
    })

    result = newResult
    i++
  }

  return result
}
