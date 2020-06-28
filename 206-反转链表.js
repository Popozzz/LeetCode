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
var reverseList = function(head) {
  var node = head;
  var preNode = null;

  while (node) {
      let next = node.next;
      node.next = preNode;
      preNode = node;
      node = next;
  }

  return preNode;
};