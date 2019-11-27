//给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。 
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。 
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。 
//
// 示例： 
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 0 -> 8
//原因：342 + 465 = 807
// 
// Related Topics 链表 数学



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
}
//leetcode submit region end(Prohibit modification and deletion)


// var addTwoNumbers = function(l1, l2) {
//     return add(l1, l2, 0)
// };

// function add (l1, l2, more) {
//     if (l1 && l2) {
//         let node = new ListNode()
//         let val = l1.val + l2.val + more
//         node.val = val >= 10 ? val - 10 : val
//         node.next = add(l1.next, l2.next, val >= 10)
//         return node
//     }
//     if (l1) {
//         let val = l1.val + more
//         l1.val = val >= 10 ? val - 10 : val
//         l1.next = add(l1.next, null, val >= 10)
//         return l1
//     }
//     if (l2) {
//         let val = l2.val + more
//         l2.val = val >= 10 ? val - 10 : val
//         l2.next = add(null, l2.next, val >= 10)
//         return l2
//     }
//     if (more) {
//         let node = new ListNode()
//         node.val = 1
//         node.next = null
//         return node
//     }
//     return null
// }