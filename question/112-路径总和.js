/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var match = false;
    function getPath(node, preSum) {
        if (match) return;
        if (node == null) return 0;
        
        preSum = preSum + node.val;
        
        if (node.left) {
            getPath(node.left, preSum);
        }

        if (node.right) {
            getPath(node.right, preSum);
        }
 
        if (preSum === sum  && node.left === null && node.right == null) {
            match = true;
        }
    }

    getPath(root, 0);

    return match;
};