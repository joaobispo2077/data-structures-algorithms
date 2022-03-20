# Binary Tree

## Tree
Tree is a structure that represents a tree, like this:
```md
       A
     / | \
    B  G  C
    / \    \
    D  E    F
```md

In these tree, we have some concepts:
- A is the root of the tree.
- All elements are nodes.
- A node can have 0 or more children.
- Nodes without children are leaves.
- A node can be a tree, a node inside a tree is a subtree.
- Two or more trees form a forest.
- E is descendant of A.
- A is an ancestor of E.


--------------------

## Binary Tree
Binary Tree:

```md
       A
      /  \
      B   C
     / \  / \
    D  E  G  F
    \       /
     H     I
```md

A binary tree is a tree with some rules:
- A node can have at most 2 children.


--------------------

## Concepts
- A _path_ is a sequence of nodes from a node to another node.
- The *size of a path* is the number of nodes in the path.
       - You can count the path using number of edges that connect the path.
- *Depth of a path* is the distance from the root.
       - This distance can be calculated using the number of node or edges in the path.
- The *height of tree* is the distance between the root and the leaf of maximum depth.
- You can calculate the height and depth of node using the size between node and most depth descendant leaf.
- A tree without any biforcation is a called of zig zag tree.
- The max height that you can get of a n elements in tree is h(n)max = n.
- The minimun height you can get of a n elements in tree is h(n)min = 1 + log n (base 2).;
