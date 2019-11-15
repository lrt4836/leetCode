//反转一个单链表。 
//
// 示例: 
//
// 输入: 1->2->3->4->5->NULL
//输出: 5->4->3->2->1->NULL 
//
// 进阶: 
//你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ 
// Related Topics 链表



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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head
    let previous = null
    while (current) {
      let temp = current.next
      current.next = previous
      previous = current
      current = temp
    }
    return previous
};
//leetcode submit region end(Prohibit modification and deletion)



// var reverseList = function(head) {
//   let current = head
//   let newHead = new ListNode()
//   while (current) {
//     let newHeadNext = newHead.next
//     let currentNext = current.next
//     newHead.next = current
//     newHead.next.next = newHeadNext
//     current = currentNext
//   }
//   return newHead.next
// };


// var reverseList = function(head) {
//   if (head == null || head.next == null) return head
//   let p = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return p
// }