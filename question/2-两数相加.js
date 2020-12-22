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
var addTwoNumbers = function(l1, l2) {
  var node1 = l1;
  var node2 = l2; 
  var result = null;
  var full = 0;
  var root = null;
  
  while (node1 || node2 || full) {
    let left = 0;
    let right = 0;
    if (node1) {
      left = node1.val;
      node1 = node1.next;
    }
    
    if (node2) {
      right = node2.val;
      node2 = node2.next;
    }
    
    var add = left + right + full;
    if (add >= 10) {
      full = 1;
      add = add - 10;
    } else {
      full = 0;
    }
    
    if (result == null) {
      result = new ListNode(add);
      root = result;
    } else { 
      result.next = new ListNode(add);
      result = result.next;
    }
  }
  
  return root;
};