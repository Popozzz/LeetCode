/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var stack = [],
    move = head;
  while (move) {
    stack.push(move);
    move = move.next;
  }

  n = stack.length - n;
  let prev = stack[n - 1];
  let next = stack[n + 1];

  if (prev) {
    prev.next = next || null;
  } else {
    head = next || null;
  }

  return head;
};
