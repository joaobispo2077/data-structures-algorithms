// All methods have big O: O(1)
const { Node } = require("./node");

class Stack {
  constructor() {
    this.top = null;
    this._size = 0;
  }

  push(element) {
    const node = new Node(element);
    node.next = this.top;
    this.top = node;
    this._size++;
  }

  pop() {
    if (this._size > 0) {
      const node = this.top;
      this.top = this.top.next;

      this._size--;
      return node.data;
    }
  }

  peek() {
    if (this.top) {
      return this.top.data;
    }
  }
}

module.exports = { Stack };