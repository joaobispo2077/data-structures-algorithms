from collections import deque


def levelOrder(root):

    queue = deque()
    queue.append(root)

    while len(queue):
        node = queue.popleft()
        if node.left:
            queue.append(node.left)

        if node.right:
            queue.append(node.right)

        print(node.info, end=" ")
