/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  // 奇数指针
  var oddPointer = head
  // 偶数指针
  var evenPointer = oddPointer? oddPointer.next : null
  // 移动指针
  var move = null
  var newHead = null

  while (evenPointer) {
      oddPointer.next = evenPointer.next
      evenPointer.next = oddPointer
      
      if (move) {
          move.next = evenPointer
      } else {
          newHead = evenPointer
      }
      move = oddPointer
      
      let nextOdd = oddPointer.next
      if (nextOdd) {
          oddPointer = nextOdd
          evenPointer = nextOdd.next
      } else {
          evenPointer = null
      }
  }

  return newHead || head
};