/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
 // dummy head
let dummyHead = new ListNode(0)
let current = dummyHead
let carry = 0 


//l1 and l2 are node(box) 
while (l1 || l2) {
    let x = l1? l1.val: 0
    let y = l2? l2.val: 0

    let sum = x + y + carry

    current.next = new ListNode(sum % 10)
    current = current.next
    carry = Math.floor(sum / 10 )

    if (l1){l1 = l1.next }
    if (l2){l2 = l2.next }
}

//scenario that stil have carry after while loop in the final step
if (carry > 0 ) {
    current.next = new ListNode(carry)
}

return dummyHead.next

};