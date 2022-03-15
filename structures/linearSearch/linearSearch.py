#  Big O: O(n)
list = [12, 34, 56, 78, 90]


def linearSearch(list, item):
    """Returns index if element is found, None otherwise"""
    for index in range(len(list)):
        if list[index] == item:
            return index
    return None


print(linearSearch(list, 56))
