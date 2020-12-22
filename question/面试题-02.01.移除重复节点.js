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
var removeDuplicateNodes = function(head) {
  var node = head;
  var preNode = head;
  var nodeMap = {};

  while (node) {
    let val = node.val;

    if (nodeMap[val] == null) {
        nodeMap[val] = true;
        preNode = node;
        node = node.next;
    } else {
        preNode.next = node.next;
        node = node.next;
    }
  }

  return head;
};