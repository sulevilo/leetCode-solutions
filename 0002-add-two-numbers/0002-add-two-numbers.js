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
    
    function resultNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
    }
    
    let currentNode = new resultNode();
    let leadNum = new resultNode();
    let firstNode = null;
    let result = 0;
    
    
    

    do{

        if(!l1) l1 = new resultNode (0);
        if(!l2) l2 = new resultNode (0);

        result = l1.val + l2.val + leadNum.val
        
        if (result > 9) {
            leadNum.val = 1
            result = result-10
        }else {
            leadNum.val = 0
        }
       
        currentNode.next = new resultNode(result)
        currentNode = currentNode.next
        

        if (!firstNode) firstNode = currentNode;

        l1 = l1.next;
        l2 = l2.next;

    } while (l1 !=  null || l2 != null)

    if(leadNum.val == 1) currentNode.next = leadNum;

    return firstNode;
    
};