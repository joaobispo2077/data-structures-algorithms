const { BinarySearchTree } = require(".");

const randomNumberList = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(randomNumberList);


const binarySearchTree = new BinarySearchTree();

[
  99, 78, 21, 71, 48,
  30, 66, 1, 13, 65
].forEach((randomNumber) => binarySearchTree.insert(randomNumber));

binarySearchTree.inOrderTraversal();
const foudNode = binarySearchTree.search(99);

console.log(foudNode);

