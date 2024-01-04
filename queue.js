/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (this.first === null){ 
      this.first = newNode;
      this.last = newNode;
    }
    else{ 
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first === null){
        throw new Error('Queue is empty')
  }
  else {
   let removedNode = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }
  }
  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.first === null){
      if (this.last == null){
        return true
      }
    }
  }
}
module.exports = Queue;
