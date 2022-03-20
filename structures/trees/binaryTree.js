const { TreeNode } = require("./treeNode");

class BinaryTree {
  constructor(data = null) {
    if (data) {
      const node = new TreeNode(data);
      this.root = node;
    } else {
      this.root = data;
    }
  }

  show() {
    console.log(this.root);
  }

  // in order traversal
  simetricTraversal(treeNode = null) {
    if (treeNode === null) {
      treeNode = this.root;
    }

    if (treeNode.left) {
      process.stdout.write('(');
      this.simetricTraversal(treeNode.left);
    }

    process.stdout.write(treeNode.data);

    if (treeNode.right) {
      this.simetricTraversal(treeNode.right);
      process.stdout.write(')');
    }

    process.stdout.write("");
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
}

module.exports = { BinaryTree };