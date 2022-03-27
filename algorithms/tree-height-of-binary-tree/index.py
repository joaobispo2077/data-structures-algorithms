def height(root):
    if root is None:
        return -1
    else:
        leftHeight = height(root.left)

        rightHeight = height(root.right)

        if leftHeight > rightHeight:
            return leftHeight + 1
        else:
            return rightHeight + 1
