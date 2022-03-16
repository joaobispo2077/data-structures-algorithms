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

    this.size++;
  }

}

const linkedList = new LinkedList();

console.info(linkedList);
linkedList.append(12);
linkedList.append(1);
console.info(linkedList);
console.info(linkedList.length);