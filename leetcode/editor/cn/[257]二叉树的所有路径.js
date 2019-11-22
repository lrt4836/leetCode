//给定一个二叉树，返回所有从根节点到叶子节点的路径。 
//
// 说明: 叶子节点是指没有子节点的节点。 
//
// 示例: 
//
// 输入:
//
//   1
// /   \
//2     3
// \
//  5
//
//输出: ["1->2->5", "1->3"]
//
//解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3 
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let paths = []
  getPath(root, '', paths)
  return paths
};

function getPath (root, path, paths) {
  if (root) {
    path += root.val
    if (!root.left && !root.right) {
      paths.push(path)
    } else {
      path += '->'
      getPath(root.left, path, paths)
      getPath(root.right, path, paths)
    }
  }
}
//leetcode submit region end(Prohibit modification and deletion)
