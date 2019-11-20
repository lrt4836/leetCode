//编写一个算法来判断一个数是不是“快乐数”。 
//
// 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。 
//
// 示例: 
//
// 输入: 19
//输出: true
//解释: 
//12 + 92 = 82
//82 + 22 = 68
//62 + 82 = 100
//12 + 02 + 02 = 1
// 
// Related Topics 哈希表 数学



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let fast = n, slow = n
  do {
    slow = bitSquareSum(slow)
    fast = bitSquareSum(fast)
    fast = bitSquareSum(fast)
  } while (slow !== fast)
  return fast === 1
}

function bitSquareSum(n) {
  let sum = 0;
  while(n > 0) {
    let bit = n % 10;
    sum += bit * bit;
    n = parseInt(n / 10);
  }
  return sum;
}
//leetcode submit region end(Prohibit modification and deletion)

// var isHappy = function(n) {
//     let s = String(n)
//     let value = 0
//     let map = {}
//     while (1) {
//         value = 0
//         for (let i = 0; i < s.length; i++) {
//             value += Math.pow(+s[i], 2)
//         }
//         if (value === 1) {
//             return true
//         }
//         if (map[value] !== undefined) {
//             return false
//         }
//         map[value] = 1
//         s = String(value)
//     }
// };
