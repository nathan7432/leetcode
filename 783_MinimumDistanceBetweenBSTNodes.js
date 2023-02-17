/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    const list = []
    let currentMin = Infinity
    const traverse = root => {
        if (root === null) return
        traverse(root.left)
        list.push(root.val)
        traverse(root.right)
    }
    traverse(root)
    for (let i = 0; i < list.length - 1; i++) {
        currentMin = Math.min(currentMin, list[i+1] - list[i])
    }
    return currentMin
};
