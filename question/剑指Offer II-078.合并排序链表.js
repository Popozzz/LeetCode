/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  var resultHead;
  var resultTail;

  lists = lists.filter((l) => !!l);

  while (lists.length) {
    const targetIndex = lists.reduce((prevIndex, current, index) => {
      const prev = lists[prevIndex];
      if (prev == null || current.val < prev.val) {
        return index;
      }

      return prevIndex;
    }, -1);

    const target = lists[targetIndex];
    lists[targetIndex] = target.next;
    target.next = null;

    if (!resultHead) {
      resultHead = target;
      resultTail = target;
    } else {
      resultTail.next = target;
      resultTail = target;
    }

    // 链表数组删除空链表
    if (lists[targetIndex] == null) {
      lists.splice(targetIndex, 1);
    }
  }

  return resultHead || (new ListNode().val = null);
};
