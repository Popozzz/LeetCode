/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  var i = 0,
    len = nums.length;
  var link1 = null,
    move1 = null,
    tail1 = null;
  var link2 = null,
    move2 = null;
  var result = [];

  while (i < len) {
    let current = nums[i];

    if (current >= 0) {
      current = current * current;
      if (!link1) {
        link1 = {
          val: current,
          next: null,
          prev: null,
        };
        move1 = link1;
      } else {
        move1.next = {
          val: current,
          next: null,
          prev: move1,
        };

        move1 = move1.next;
      }
    } else {
      current = current * current;
      if (!link2) {
        link2 = {
          val: current,
          next: null,
          prev: null,
        };
        move2 = link2;
      } else {
        move2.next = {
          val: current,
          next: null,
          prev: move2,
        };

        move2 = move2.next;
      }
    }
    i++;
  }

  if (!link1 && move2) {
    const prev = move2.prev;
    move2.prev = null;
    move2.next = null;
    link1 = move2;
    move1 = link1;
    move2 = prev;
  }

  move1 = link1;
  while (move2) {
    const prev = move2.prev;

    while (move1) {
      if (move2.val <= move1.val) {
        let prev = move1.prev;
        if (prev) {
          prev.next = move2;
          move2.prev = prev;
        } else {
          link1 = move2;
          move2.prev = null;
        }

        move1.prev = move2;
        move2.next = move1;

        move1 = move2;
        break;
      }

      if (move1.next == null) {
        tail1 = move1;
      }

      move1 = move1.next;
    }

    if (tail1) {
      move2.next = null;
      move2.prev = tail1;
      tail1.next = move2;
      tail1 = tail1.next;
    }

    move2 = prev;
  }

  move1 = link1;
  while (move1) {
    result.push(move1.val);
    move1 = move1.next;
  }

  return result;
};
