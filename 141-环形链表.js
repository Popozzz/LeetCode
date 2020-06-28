/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null) return false;

  var fast = head;
  var slow = head;
  var start = true;
  
  while (fast !== slow || start) {
      start = false;
      fast = fast.next;

      if (fast) {
          fast = fast.next;
      }
      slow = slow.next;

      if (fast === null || slow === null) {
          return false;
      }
  }

  return true;
};