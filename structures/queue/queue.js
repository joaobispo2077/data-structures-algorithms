const { Node } = require("./node");

class Queue {
  constructor() {
    this.top = null;
    this._size = 0;
  }

  get length() {
    return this._size;
  }

  push(value) {
    const node = new Node(value);

    if (this.top === null) {
      this.top = node;
      return;
    }

    let pointer = this.top;
    while (pointer.next) {
      pointer = pointer.next;
    }

    if (pointer) {
      pointer.next = node;
    }

    this._size++;
  }

  pop() {
    if (this.top) {
      let previousPointer = this.top;
      let pointer = this.top.next;

      while (pointer.next) {
        previousPointer = pointer;
        pointer = pointer.next;
      }

      const node = pointer;
      previousPointer.next = null;
      this._size--;

      return node.data;
    }

    return this.top;
  }

  peek() {
    let pointer = this.top;

    if (pointer) {

      while (pointer.next) {
        pointer = pointer.next;
      }

      return pointer.data;
    }

    return pointer;
  }
}

module.exports = { Queue };