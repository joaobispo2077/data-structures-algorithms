from node import Node


class LinkedList:
    def __init__(self):
        self.head = None
        self._size

    def __len__(self):
        return self._size

    def append(self, data):
        if self.head:
            pointer = self.head
            while(pointer.next):
                pointer = pointer.next
            pointer.next = Node(data)
        else:
            self.head = Node(data)
        self._size = self._size + 1

    def __getitem__(self, targetIndex):
        pointer = self.head
        for index in range(targetIndex):
            if pointer:
                pointer = pointer.next
            else:
                return None

        if pointer:
            return pointer.data
        else:
            return None

    def __setitem__(self, targetIndex, data):
        pointer = self.head
        for index in range(targetIndex):
            if pointer:
                pointer = pointer.next
            else:
                return None

        if pointer:
            pointer.data = data
            return data
        else:
            return None
