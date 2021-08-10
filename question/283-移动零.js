/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var i = 0,
    len = nums.length;
  var head, move;

  // 制造双指针结构
  while (i < len) {
    const current = nums[i];

    if (current === 0) {
      i++;
      continue;
    }

    if (!head) {
      head = {
        val: current,
        prev: null,
        next: null,
      };
      move = head;
    } else {
      move.next = {
        val: current,
        prev: move,
        next: null,
      };
      move = move.next;
    }
    i++;
  }

  // 改变原数组
  i = 0;
  move = head;
  while (i < len) {
    if (move) {
      nums[i] = move.val;
      move = move.next;
    } else {
      nums[i] = 0;
    }

    i++;
  }
};
