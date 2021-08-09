/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var i = 0,
    len = nums.length;
  var head, tail, nextHead;
  k = k % len;

  while (i < len) {
    const current = nums[i];
    if (!head) {
      head = {
        val: current,
        prev: null,
        next: null,
      };
      tail = head;
    } else {
      tail.next = {
        prev: tail,
        next: null,
        val: current,
      };

      tail = tail.next;
    }

    if (i === len - k) {
      tail.prev = null;
      nextHead = tail;
    }
    i++;
  }

  if (k > 0) {
    tail.next = head;
  }

  i = 0;
  while (nextHead && i < len) {
    nums[i] = nextHead.val;
    nextHead = nextHead.next;
    i++;
  }
};
