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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const q = []
    q.push(root)
    const result = []
    while (q.length > 0) {
        const levelList = []
        const l = q.length
        for (let i = 0; i < l; i++) {
            const current = q.shift()
            levelList.push(current.val)
            if (current.left) q.push(current.left)
            if (current.right) q.push(current.right)
        }
        result.push(levelList)
    }
    return result
};
