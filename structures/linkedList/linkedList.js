const { Node } = require("./node");


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get length() {
    return this.size
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

}

const linkedList = new LinkedList();

console.info(linkedList);
linkedList.append(12);
linkedList.append(1);
console.info(linkedList);
console.info(linkedList.length);