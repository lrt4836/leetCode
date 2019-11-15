//请判断一个链表是否为回文链表。 
//
// 示例 1: 
//
// 输入: 1->2
//输出: false 
//
// 示例 2: 
//
// 输入: 1->2->2->1
//输出: true
// 
//
// 进阶： 
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ 
// Related Topics 链表 双指针



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true
  let mid = head
  let pre = null
  let reserve = null
  while (head && head.next) {
    pre = mid
    // 指针移动
    mid = mid.next
    head = head.next.next
    // 前半部分反转
    pre.next = reserve
    reserve = pre
  }
  // 奇数mid往后一位
  if (head) mid = mid.next
  while (mid) {
    if (mid.val !== reserve.val) {
      return false
    }
    reserve = reserve.next
    mid = mid.next
  }
  return true
};
//leetcode submit region end(Prohibit modification and deletion)


// var isPalindrome = function(head) {
//     let a = []
//     while (head) {
//         a.push(head.val)
//         head = head.next
//     }
//     return a.join('') === a.reverse().join('')
// };