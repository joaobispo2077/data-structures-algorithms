from node import Node


class Stack:
    def __init__(self):
        self.top = None
        self._size = 0

    def __len__(self):
        return self._size

    def __repr__(self):
        text_list = ""
        pointer = self.head
        while(pointer):
            text_list = text_list + str(pointer.data) + "\n"
            pointer = pointer.next
        return text_list

    def __str__(self):
        return self.__repr__()

    def push(self, data):
        node = Node(data)
        node.next = self.top
        self.head = node
        self._size += 1

    def pop(self):
        if self.top:
            node = self.top
            self.top = self.top.next
            return node.data

    def peek(self):
        if self.top:
            return self.top.data
