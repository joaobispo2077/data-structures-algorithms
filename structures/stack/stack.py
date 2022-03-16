class Stack:
    def __init__(self):
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
