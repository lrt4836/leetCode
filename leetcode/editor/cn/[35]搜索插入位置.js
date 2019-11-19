//给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。 
//
// 你可以假设数组中无重复元素。 
//
// 示例 1: 
//
// 输入: [1,3,5,6], 5
//输出: 2
// 
//
// 示例 2: 
//
// 输入: [1,3,5,6], 2
//输出: 1
// 
//
// 示例 3: 
//
// 输入: [1,3,5,6], 7
//输出: 4
// 
//
// 示例 4: 
//
// 输入: [1,3,5,6], 0
//输出: 0
// 
// Related Topics 数组 二分查找



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0, high = nums.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid
      }
      high = mid - 1
    } else {
      if (mid === nums.length - 1 || nums[mid+1] > target) {
        return mid + 1
      }
      low = mid + 1
    }
  }
};
//leetcode submit region end(Prohibit modification and deletion)
