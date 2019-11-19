//给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。 
//
// 说明：不要使用任何内置的库函数，如 sqrt。 
//
// 示例 1： 
//
// 输入：16
//输出：True 
//
// 示例 2： 
//
// 输入：14
//输出：False
// 
// Related Topics 数学 二分查找



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let low = 0, high = parseInt(num/2) + 1
  while (low <= high) {
    let mid = Math.floor(low + (high - low)/2)
    if (num === mid * mid) {
      return true
    } else if (num > mid * mid) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
};
//leetcode submit region end(Prohibit modification and deletion)
