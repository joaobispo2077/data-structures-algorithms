const { Queue } = require("./queue");
const DEFAULT_NODE = "DEFAULT_NODE";
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

    process.stdout.write(` ${treeNode.data} `);

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

  levelOrderTraversal(treeNode = DEFAULT_NODE) {
    if (treeNode === DEFAULT_NODE) {
      treeNode = this.root;
    }

    const queue = new Queue();
    queue.enqueue(treeNode);

    while (queue.length > 0) {
      const node = queue.dequeue();

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }

      if (node.data) {
        process.stdout.write(` ${node.data} `);
      }
    }


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


module.exports = { BinaryTree };
