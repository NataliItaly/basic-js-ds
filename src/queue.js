const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    let currentNode = this.head;
    if (!currentNode) return null;

    function setObject(node) {
      if (!node) return null;

      return {
        value: node.value,
        next: setObject(node.next)
      }
    }
    return setObject(currentNode);
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    return node;
  }

  dequeue() {
    if (!this.head) return undefined;

    const exitValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }
    return exitValue;
  }
}

module.exports = {
  Queue
};
