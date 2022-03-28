# Complete the 'swapNodes' function below.
#
# The function is expected to return a 2D_INTEGER_ARRAY.
# The function accepts following parameters:
#  1. 2D_INTEGER_ARRAY indexes
#  2. INTEGER_ARRAY queries
#
from collections import deque
import os
import sys
sys.setrecursionlimit(10000)


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self, data):
        if data:
            self.root = Node(data)
        else:
            self.root = None

    def swap(self, node, query, level, list):
        if node:
            if level % query == 0:
                node.left, node.right = node.right, node.left

            self.swap(node.left, query, level + 1, list)
            list.append(node.data)
            self.swap(node.right, query, level + 1, list)

    def create(self, root, indexes):
        if root is None:
            root = self.root

        queue = deque([self.root])
        for x, y in indexes:
            current_node = queue.popleft()

            if x != -1:
                current_node.left = Node(x)
                queue.append(current_node.left)
            if y != -1:
                current_node.right = Node(y)
                queue.append(current_node.right)

        return root


def swapNodes(indexes, queries):
    tree = BinaryTree(1)

    root = tree.create(tree.root, indexes)

    result = []
    for query in queries:
        list = []
        tree.swap(root, query, 1, list)
        result.append(list)

    return result
