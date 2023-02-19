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
var zigzagLevelOrder = function(root) {
    if (!root) return []
    const result = []
    const stack = [root]
    let reverse = true
    while (stack.length > 0) {
        const levelList = []
        const l = stack.length
        const tempStack = []
        for (let i = 0; i < l; i++) {
            const current = stack.pop()
            levelList.push(current.val)
            if (reverse) {
                if (current.left) tempStack.push(current.left)
                if (current.right) tempStack.push(current.right)
            } else {
                if (current.right) tempStack.push(current.right)
                if (current.left) tempStack.push(current.left)
            }
        }
        stack.push(...tempStack)
        reverse = !reverse
        result.push(levelList)
    }
    return result
};
