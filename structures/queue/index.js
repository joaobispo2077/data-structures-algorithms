const { Queue } = require("./queue");

const queue = new Queue();

console.log(queue);
console.log(queue.show());
queue.enqueue(1);
console.log(queue);
console.log(queue.peek());
queue.enqueue(2);
console.log(queue);
console.log(queue.peek());
queue.enqueue(3);
console.log(queue);
console.log(queue.show());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
// Queue { top: null, _size: 0 }
console.log(queue.show());
console.log(queue.dequeue());
console.log(queue.dequeue());
// Queue { top: Node { data: 1, next: null }, _size: 0 }
// 1
// Queue {
//   top: Node { data: 1, next: Node { data: 2, next: null } },
//   _size: 1
// }
// 2
// Queue {
//   top: Node { data: 1, next: Node { data: 2, next: [Node] } },
//   _size: 2
// }
// 3
// 3
// Queue {
//   top: Node { data: 1, next: Node { data: 2, next: null } },
//   _size: 1
// }
// 2
// Queue { top: Node { data: 1, next: null }, _size: 0 }