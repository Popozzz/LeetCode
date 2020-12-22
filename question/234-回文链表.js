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
var isPalindrome = function(head) {
  var preNode = null;;
  var fast = head;
  var left = head;
  var right;
  var odd = true;

  while (fast) {
      fast = fast.next;
      
      if (fast) {
          fast = fast.next;
      } else { // 单数
          odd = false;
      }

      let next = left.next;
      left.next = preNode;
      preNode = left;
      left = next;
  }

  right = left;

  if (odd) {
      left = preNode;
  } else {
      left = preNode.next;
  }

  while (left && right) {
      if (left.val !== right.val) {
          return false;
      }

      left = left.next;
      right = right.next;
  }

  return true;
};