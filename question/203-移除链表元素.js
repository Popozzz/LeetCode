/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var headPointer = head;
    var pointer = head;
    var prePointer = head;

    while(pointer) {
        if (pointer.val === val) {
            if (pointer === headPointer) {
                prepointer = headPointer = headPointer.next;
            } else {
                prePointer.next = pointer.next;
                pointer = prePointer;
            }
        }

        prePointer = pointer;
        pointer = prePointer.next;
    }

    return headPointer;
};