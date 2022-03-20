const { BinaryTree } = require("./binaryTree");
const { TreeNode } = require("./treeNode");

const binaryTree = new BinaryTree(7);
binaryTree.root.left = new TreeNode(5);
binaryTree.root.right = new TreeNode(9);
binaryTree.show();