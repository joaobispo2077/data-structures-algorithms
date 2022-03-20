/// In order traversal
// simetric order traversal
//   '+'
//   / \
// 'a'  '*'
//       / \
//     'b' '-'
//         / \
//       '/' 'e'
//       /\
//     'c' 'd'
// ((((c/d) - e) * b) + a)
// ( a + ( b * ( ( c/d ) - e ) ) )
const { BinaryTree } = require("./binaryTree");
const { TreeNode } = require("./treeNode");



const runInOrderTraversal = () => {
  const tree = new BinaryTree();
  const n1 = new TreeNode('a');
  const n2 = new TreeNode('+');
  const n3 = new TreeNode('*');
  const n4 = new TreeNode('b');
  const n5 = new TreeNode('-');
  const n6 = new TreeNode('/');
  const n7 = new TreeNode('c');
  const n8 = new TreeNode('d');
  const n9 = new TreeNode('e');

  n6.left = n7;
  n6.right = n8;
  n5.left = n6;
  n5.right = n9;
  n3.left = n4;
  n3.right = n5;
  n2.left = n1;
  n2.right = n3;

  tree.root = n2;

  tree.simetricTraversal();
}
console.log("\nPercurso em ordem:")
runInOrderTraversal();

/// Post order traversal


const runPostOrderTraversal = () => {
  const tree = new BinaryTree();
  const n1 = new TreeNode('I');
  const n2 = new TreeNode('N');
  const n3 = new TreeNode('S');
  const n4 = new TreeNode('C');
  const n5 = new TreeNode('R');
  const n6 = new TreeNode('E');
  const n7 = new TreeNode('V');
  const n8 = new TreeNode('A');
  const n9 = new TreeNode('5');
  const n0 = new TreeNode('3');

  n0.left = n6;
  n0.right = n9;
  n6.left = n1;
  n6.right = n5;
  n5.left = n2;
  n5.right = n4;
  n4.right = n3;
  n9.left = n8;
  n8.right = n7;

  tree.root = n0;

  tree.postOrderTraversal();
  console.log("\nTree height:", tree.getHeight());
  console.log("\nNode 5 height:", tree.getHeight(n5));
}

console.log("\nPercurso em pós ordem:");
runPostOrderTraversal();
