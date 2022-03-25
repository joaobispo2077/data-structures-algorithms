## Remove node from Binary Search Tree

### Case 1: The node is a leaf

- If the node is a leaf, so we can just remove it. Because we do not to modify the tree to keep the property of binary search tree.

### Case 2: The node have one child

In this case we connect the node's parent to the node's child, and then remove the node.

### Case 3: The node have two children

In this case we have to find the successor of the node. The successor is the smallest node in the right subtree of the node. We connect the node's parent to the successor, and then remove the successor, because we need to keep the property of binary search tree.
