const { Queue } = require("./queue");

const queue = new Queue();

console.log(queue);
queue.push(1);
console.log(queue);
console.log(queue.peek());
queue.push(2);
console.log(queue);
console.log(queue.peek());
queue.push(3);
console.log(queue);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue);
console.log(queue.pop());
console.log(queue);
console.log(queue.pop());
console.log(queue);
