//给定一个二叉树，判断它是否是高度平衡的二叉树。 
//
// 本题中，一棵高度平衡二叉树定义为： 
//
// 
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。 
// 
//
// 示例 1: 
//
// 给定二叉树 [3,9,20,null,null,15,7] 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7 
//
// 返回 true 。 
// 
//示例 2: 
//
// 给定二叉树 [1,2,2,3,3,null,null,4,4] 
//
//        1
//      / \
//     2   2
//    / \
//   3   3
//  / \
// 4   4
// 
//
// 返回 false 。 
// Related Topics 树 深度优先搜索



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return depth(root) !== -1
}

function depth (root) {
  if (root === null) return 0;
  let left = depth(root.left)
  if(left === -1) return -1;
  let right = depth(root.right)
  if(right === -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}
//leetcode submit region end(Prohibit modification and deletion)

// var isBalanced = function(root) {
//     if (!root) return true
//     let left = height(root.left)
//     let right = height(root.right)
//     if (Math.abs(left - right) > 1) return false
//     return isBalanced(root.left) && isBalanced(root.right)
// };

// function height (root) {
//     if (!root) return 0
//     return Math.max(height(root.left), height(root.right)) + 1
// }