/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
  // 按从小到大排序
  nums.sort((a, b) => a - b)
  
  // 找中位数
  let middle = 0
  // 奇数长度
  if(nums.length & 1) {
      middle = nums[(nums.length-1)/2]
  } else {
      middle = (nums[(nums.length)/2-1] + nums[(nums.length)/2])/2 >> 0
  }

  return nums.reduce((result, num) => {
      const dValue = num - middle
      result += (dValue > 0? dValue : -dValue) 
      return result
  }, 0)
};