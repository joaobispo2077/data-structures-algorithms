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

  push(element) {
    const node = new Node(element);

    if (this.last === null) {
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    if (this.first === null) {
      this.first = node;
    }
    this._size++;
  }

  pop() {
    if (this._size > 0) {

      let element;
      if (this.first) {
        element = this.first.data;
        this.first = this.first.next;
      }

      if (this.first === null) {
        this.last = null;
      }



      this._size--;
      return element;
    } else {
      throw new Error("The queue is empty");
    }
  }

  peek() {
    if (this._size > 0) {
      const element = this.first.data;
      this.first = this.first.next;

      return element;
    } else {
      return null;
    }
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