// O(n)
const { Node } = require("./node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  get length() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  enqueue(element) {
    const node = new Node(element);

    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this._size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const itemToBeRemoved = this.first;

    if (this.first === null) {
      this.last = null;
    }
    this.first = this.first.next;



    this._size--;
    return itemToBeRemoved.data;
  }

  peek() {
    return this.first;
  }

  show() {
    if (this._size > 0) {

      let queue = "";

      let pointer = this.first;

      while (pointer) {
        queue += String(pointer.data) + " ";
        pointer = pointer.next;
      }
      return queue;
    } else {
      return "Empty queue";
    }
  }
}

module.exports = { Queue };