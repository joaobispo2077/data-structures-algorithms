
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data = null) {
    if (data) {
      const node = new Node(data);
      this.root = node;
    } else {
      this.root = data;
    }
  }

  show() {
    console.log(this.root);
  }

  // in order traversal
  inOrderTraversal(treeNode = null) {
    if (treeNode === null) {
      treeNode = this.root;
    }

    if (treeNode.left) {
      this.inOrderTraversal(treeNode.left);
    }

    console.log(treeNode.data);

    if (treeNode.right) {
      this.inOrderTraversal(treeNode.right);
    }

  }

  postOrderTraversal(treeNode = null) {
    if (treeNode === null) {
      treeNode = this.root;
    }

    if (treeNode.left) {
      this.postOrderTraversal(treeNode.left);
    }

    if (treeNode.right) {
      this.postOrderTraversal(treeNode.right);
    }

    process.stdout.write(treeNode.data);
  }

  getHeight(treeNode = null) {
    if (treeNode === null) {
      treeNode = this.root;
    }

    let leftHeight = 0;
    let rightHeight = 0;

    if (treeNode.left) {
      leftHeight = this.getHeight(treeNode.left);
    }

    if (treeNode.right) {
      rightHeight = this.getHeight(treeNode.right);
    }

    if (rightHeight > leftHeight) {
      return rightHeight + 1;
    }

    return leftHeight + 1;
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
}

module.exports = { BinarySearchTree };
