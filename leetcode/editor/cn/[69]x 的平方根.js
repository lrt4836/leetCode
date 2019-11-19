//实现 int sqrt(int x) 函数。 
//
// 计算并返回 x 的平方根，其中 x 是非负整数。 
//
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。 
//
// 示例 1: 
//
// 输入: 4
//输出: 2
// 
//
// 示例 2: 
//
// 输入: 8
//输出: 2
//说明: 8 的平方根是 2.82842..., 
//     由于返回类型是整数，小数部分将被舍去。
// 
// Related Topics 数学 二分查找



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let low = 0, high = parseInt(x/2) + 1
  while (low <= high) {
    let mid = Math.floor(low + (high - low)/2)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      if ((mid+1) * (mid+1) > x) {
        return mid
      }
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
};
//leetcode submit region end(Prohibit modification and deletion)
