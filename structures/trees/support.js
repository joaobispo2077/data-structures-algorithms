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