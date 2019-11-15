//删除链表中等于给定值 val 的所有节点。 
//
// 示例: 
//
// 输入: 1->2->6->3->4->5->6, val = 6
//输出: 1->2->3->4->5
// 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let current = head
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  if (head.val === val) {
    return head.next
  } else {
    return head
  }

};
//leetcode submit region end(Prohibit modification and deletion)
