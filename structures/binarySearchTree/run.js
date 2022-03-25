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

function runRemoveNode() {

  const BST = new BinarySearchTree();
  [61, 89, 66, 43, 51, 16, 55, 11, 79, 77, 82, 32, 100, 90].forEach((randomNumber) => BST.insert(randomNumber));

  console.log("\nshowing before remove.\n")
  BST.inOrderTraversal();
  BST.remove(61);
  console.log("\nshowing after remove.\n")
  BST.inOrderTraversal();

  console.log("\nshowing before remove.\n")
  BST.inOrderTraversal();
  BST.remove(11);
  console.log("\nshowing after remove.\n")
  BST.inOrderTraversal();

  console.log("\nshowing before remove.\n")
  BST.inOrderTraversal();
  BST.remove(100);
  console.log("\nshowing after remove.\n")
  BST.inOrderTraversal();

  console.log("\nshowing before remove.\n")
  BST.inOrderTraversal();
  BST.remove(89);
  console.log("\nshowing after remove.\n")
  BST.inOrderTraversal();

}

runRemoveNode();
