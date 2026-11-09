const { NotImplementedError } = require('../lib');

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
    this._head = null;
    this._tail = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    const node = {
      value,
      next: null,
    };

    if (!this._tail) {
      this._head = node;
      this._tail = node;
      return;
    }

    this._tail.next = node;
    this._tail = node;
  }

  dequeue() {
    if (!this._head) {
      return undefined;
    }

    const value = this._head.value;
    this._head = this._head.next;
    if (!this._head) {
      this._tail = null;
    }
    return value;
  }
}

module.exports = {
  Queue
};
