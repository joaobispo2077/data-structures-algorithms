from node import Node


class LinkedList:
    def __init__(self):
        self.head = None
        self.size

    def append(self, data):
        if self.head:
            pointer = self.head
            while(pointer.next):
                pointer = pointer.next
            pointer.next = Node(data)
        else:
            self.head = Node(data)

    def __len__(self):
