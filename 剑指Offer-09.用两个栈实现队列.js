var CQueue = function() {
  this.head = [];
  this.tail = [];
 };
 
 /** 
  * @param {number} value
  * @return {void}
  */
 CQueue.prototype.appendTail = function(value) {
     this.tail.push(value)
 };
 
 /**
  * @return {number}
  */
 CQueue.prototype.deleteHead = function() {
     var head = this.head;
     var tail = this.tail;
 
     if (head.length > 0) {
         return head.pop();
     } else if (tail.length > 0) {
         while (tail.length > 0) {
             head.push(tail.pop());
         }
         return head.pop();
     } else {
         return -1;
     }
 };
 
 /**
  * Your CQueue object will be instantiated and called as such:
  * var obj = new CQueue()
  * obj.appendTail(value)
  * var param_2 = obj.deleteHead()
  */