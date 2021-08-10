/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 思路：从左边开始一次循环，再从右边开始一次内循环，
// 如果相加结果小于target退出内循环，左边右移，开始下一次内循环还是用上次的右边位置
// 原因是如果左边+右边>target，那么左边进行右移后也是同样，所以右边位置无须变动

var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left !== right) {
    while (right) {
      const current = numbers[left] + numbers[right];
      if (current === target) return [left + 1, right + 1];

      if (current < target) {
        break;
      }

      right--;
    }

    left++;
  }
};
