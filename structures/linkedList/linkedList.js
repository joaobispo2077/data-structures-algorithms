const { Node } = require("./node");


class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  _getNode(targetIndex) {
    let pointer = this.head;

    for (let index = 0; index < targetIndex; index++) {
      if (pointer) {
        pointer = pointer.next;
      } else {
        return null;
      }
    }

    if (pointer) {
      return pointer;
    } else {
      return null;
    }
  }

  get length() {
    return this._size
  }

  append(element) {
    if (this.head) {
      let pointer = this.head;

      while (pointer.next) {
        pointer = pointer.next;
      }

      pointer.next = new Node(element);
    } else {
      this.head = new Node(element);
    }

    this._size++;
  }

  get(targetIndex) {
    let pointer = this._getNode(targetIndex);

    if (pointer) {
      return pointer.data;
    } else {
      return null;
    }
  }

  set(targetIndex, element) {
    let pointer = this._getNode(targetIndex);

    if (pointer) {
      pointer.data = element;
      return element;
    } else {
      return null;
    }
  }

  search(element) {
    let pointer = this.head;

    while (pointer) {
      if (pointer.data === element) {
        return pointer.data;
      }

      pointer = pointer.next;
    }

    return null;
  }

  insert(targetIndex, element) {
    const node = new Node(element);
    if (targetIndex === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const pointer = this._getNode(targetIndex - 1);
      node.next = pointer.next;
      pointer.next = node;
    }
    this._size++;
  }

  remove(element) {
    this._size--;
    if (this.head === null) {
      return null;
    } else if (this.head.data === element) {
      this.head = this.head.next;
      return true;
    } else {
      let previousPointer = this.head;
      let pointer = this.head.next;
      while (pointer.next) {
        if (pointer.data === element) {
          previousPointer.next = pointer.next;
          pointer.next = null;
          return true;
        }

        previousPointer = pointer;
        pointer = pointer.next;
      }
      return false;
    }
  }

}

module.exports = { LinkedList };