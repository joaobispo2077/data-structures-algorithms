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
}

module.exports = { BinaryTree };