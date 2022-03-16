from node import Node


class LinkedList:
    def __init__(self):
        self.head = None
        self._size

    def _get_node(self, target_index):
        pointer = self.head
        for index in range(target_index):
            if pointer:
                pointer = pointer.next
            else:
                return None

        if pointer:
            return pointer
        else:
            return None

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

    def search(self, element):
        pointer = self.head
        while(pointer):
            if pointer.data == element:
                return pointer.data
            pointer = pointer.next
        return None

    def insert(self, target_index, element):
        node = Node(element)

        if target_index == 0:
            node.next = self.head
            self.head = node
        else:
            pointer = self._get_node(target_index - 1)
            node.next = pointer.next
            pointer.next = node

        self._size = self._size + 1

    def remove(self, element):
        if self.head == None:
            return None
        elif self.head.data == element:
            self.head = self.head.next
            self._size = self._size - 1
            return True
        else:
            previous_pointer = self.head
            pointer = self.head.next

            while(pointer):
                if pointer.data == element:
                    previous_pointer.next = pointer.next
                    self._size = self._size - 1
                    return True

                previous_pointer = pointer
                pointer = pointer.next

            return False

    def __repr__(self):
        text_list = ""
        pointer = self.head
        while(pointer):
            text_list = text_list + str(pointer.data) + "->"
            pointer = pointer.next
        return text_list

    def __str__(self):
        return self.__repr__()
