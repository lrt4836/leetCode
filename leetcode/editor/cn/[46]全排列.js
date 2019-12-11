//给定一个没有重复数字的序列，返回其所有可能的全排列。 
//
// 示例: 
//
// 输入: [1,2,3]
//输出:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//] 
// Related Topics 回溯算法



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  backtrack(nums.length, nums, res, 0)
  return res
};

function backtrack (n, nums, res, first) {
  if (first === n) {
    res.push(nums)
  }
  for (let i = first; i < n; i++) {
    swap(nums, first, i)
    backtrack(n, [...nums], res, first+1)
    swap(nums, first, i)
  }
}

function swap (arr, first, second) {
  let temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}
//leetcode submit region end(Prohibit modification and deletion)
