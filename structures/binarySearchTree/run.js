const { BinarySearchTree } = require(".");

const randomNumberList = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(randomNumberList);


const binarySearchTree = new BinarySearchTree();

[61, 89, 66, 43, 51, 16, 55, 11, 79, 77, 82, 32]
  .forEach((randomNumber) => binarySearchTree.insert(randomNumber));

binarySearchTree.inOrderTraversal();
binarySearchTree.levelOrderTraversal();
console.info('\n----')
console.info(binarySearchTree.getMinimumValue());
console.info(binarySearchTree.getMaximumValue());
// const foudNode = binarySearchTree.search(99);

// console.log(foudNode);

