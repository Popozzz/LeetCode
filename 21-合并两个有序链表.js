/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let nextANode = l1;
  let nextBNode = l2;
  let headNode = getHeadNode(nextANode, nextBNode);
  let result = headNode;

  if (nextANode && result.val === nextANode.val) {
    nextANode = nextANode.next;
  } else if (nextBNode) {
    nextBNode = nextBNode.next;
  }

  while (nextANode && nextBNode) {
    let min = Min(nextANode.val, nextBNode.val);
    result.next = new ListNode(min);
    result = result.next;

    if (min === nextANode.val) {
      nextANode = nextANode.next;
    } else {
      nextBNode = nextBNode.next;
    }
  }

  if (nextANode) {
    result.next = nextANode;
  }

  if (nextBNode) {
    result.next = nextBNode;
  }

  function Min(a, b) {
    if (a > b) return b;
    return a;
  }

  function getHeadNode(nodeA, nodeB) {
    if (nodeA && nodeB) {
      let min = Min(nodeA.val, nodeB.val);
      return new ListNode(min);
    }

    return nodeA || nodeB;
  }

  return headNode;
};