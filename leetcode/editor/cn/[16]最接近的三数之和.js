//给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。 
//
// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
//
//与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
// 
// Related Topics 数组 双指针



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 排序
  nums.sort((a, b) => a-b)
  // 初始差值
  let ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      // 修改指针
      if (sum === target) {
        return sum
      } else if (sum > target) {
        while (nums[right] === nums[right-1]) right--
        right--
      } else {
        while (nums[left] === nums[left+1]) left++
        left++
      }
      // 修改差值
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum
      }
    }
  }
  return ans
};
//leetcode submit region end(Prohibit modification and deletion)
