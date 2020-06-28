/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var nodeA = headA;
  var nodeB = headB;

  var firstA = true;
  var firstB = true;

  while (nodeA && nodeB) {
      if (nodeA === nodeB) {
          return nodeA;
      }

      nodeA = nodeA.next;
      nodeB = nodeB.next;

      if (nodeA == null && firstA) {
          firstA = false;
          nodeA = headB;
      }

      if (nodeB == null && firstB) {
          firstB = false;
          nodeB = headA;
      }
  }

  return null;
};