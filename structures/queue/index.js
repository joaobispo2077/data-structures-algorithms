const { Queue } = require("./queue");

const queue = new Queue();

console.log(queue);
console.log(queue.show());
queue.push(1);
console.log(queue);
console.log(queue.peek());
queue.push(2);
console.log(queue);
console.log(queue.peek());
queue.push(3);
console.log(queue);
console.log(queue.show());
console.log(queue.peek());
console.log(queue.pop());
console.log(queue);
console.log(queue.pop());
console.log(queue);
console.log(queue.pop());
console.log(queue);
console.log(queue.show());
// Queue { top: null, _size: 0 }
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