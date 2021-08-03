/**
 * @param {number[]} nums
 * @return {number}
 */
// 连续无序的数组进行升序整个数组变成升序
// 思路：从左边开始找当前最大值，一旦有数值小于当前最大值就开始记录位置；
// 从右边开始找当前最小值，一旦有数值大于当前最小值开始记录位置；
var findUnsortedSubarray = function (nums) {
  var len = nums.length;

  var left = len - 1,
    right = 0;
  var min = nums[left],
    max = nums[right];
  var leftFlag = 0,
    rightFlag = 0;

  while (right < len) {
    let currentRight = nums[right];

    if (currentRight < max) {
      rightFlag = right;
    } else {
      max = currentRight;
    }

    right++;
  }

  while (left >= 0) {
    let currentLeft = nums[left];

    if (currentLeft > min) {
      leftFlag = left;
    } else {
      min = currentLeft;
    }
    left--;
  }

  return rightFlag - leftFlag === 0 ? 0 : rightFlag - leftFlag + 1;
};
