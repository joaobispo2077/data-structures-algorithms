const { BinaryTree } = require("./binaryTree");

const DEFAULT_NODE = "DEFAULT_NODE";
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree extends BinaryTree {
  insert(data) {
    let parent = null;
    let subTreeRoot = this.root;

    while (subTreeRoot) {
      parent = subTreeRoot;
      if (data < parent.data) {
        subTreeRoot = parent.left;
      } else {
        subTreeRoot = parent.right;
      }
    }

    const node = new Node(data);

    if (parent === null) {
      this.root = node;
    } else if (data < parent.data) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  search(data, node = 0) {
    if (node === 0) {
      node = this.root;
    }

    if (node === null) {
      return node;
    }

    if (node.data === data) {
      return new BinarySearchTree(node.data);
    }

    if (data < node.data) {
      return this.search(data, node.left);
    } else {
      return this.search(data, node.right);
    }
  }

  getMinimumValue(treeNode = DEFAULT_NODE) {
    if (treeNode === DEFAULT_NODE) {
      treeNode = this.root;
    }

    while (treeNode.left) {
      treeNode = treeNode.left;
    }

    return treeNode.data;
  }

  getMaximumValue(treeNode = DEFAULT_NODE) {
    if (treeNode === DEFAULT_NODE) {
      treeNode = this.root;
    }

    while (treeNode.right) {
      treeNode = treeNode.right;
    }

    return treeNode.data;
  }
}

module.exports = { BinarySearchTree };
