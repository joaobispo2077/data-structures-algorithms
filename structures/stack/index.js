const { Stack } = require("./stack");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop());

console.info(stack.peek());
console.info(stack);