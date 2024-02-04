/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  if (k <= 1) return head

  // 建立双指针
  let move = head
  let peer = null
  while (move) {
      move.prev = peer
      peer = move
      move = move.next
  }

  move = head
  let result = null
  while (move) {
      let prev = move.prev
      let count = 1
      // 一次移动k个节点
      while (count < k && move) {
          move = move.next
          count ++
      }

      if (!result) {
          result = move
      }
      
      if (move) {
          let nextMove = move.next
          let prevNode = move.prev
          count = 1
          if (prev) {
              prev.next = move
          }
          // 翻转链表
          while (count < k && prevNode) {
              move.next = prevNode
              move = prevNode
              prevNode = prevNode.prev
              count ++
          }
          move.next = nextMove
          if (nextMove) {
              nextMove.prev = move
          }
          move = nextMove
      }
  }

  return result
};