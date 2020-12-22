/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;

  var prev = head;
  var node = head.next;

  while (node) {
    if (node.val === prev.val) {
      prev.next = node.next;
    } else {
      prev = node;
    }

    node = node.next;
  }

  return head;
};