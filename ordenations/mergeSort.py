
# function merge(leftList, rightList) {
#   let arr = []
#   while (leftList.length && rightList.length) {
#     if (leftList[0] < rightList[0]) {
#       arr.push(leftList.shift())
#     } else {
#       arr.push(rightList.shift())
#     }
#   }

#   return [...arr, ...leftList, ...right]
# }

# function mergeSort(array) {
#   const half = Math.floor(array.lenght / 2);

#   if (array.length < 2) {
#     return array
#   }

#   const left = array.splice(0, half)
#   return merge(mergeSort(left), mergeSort(array))
# }

from multiprocessing.sharedctypes import Array


def merge(leftList, rightList):
    arr = []
    while (leftList.length and rightList.length):
        if (leftList[0] < rightList[0]):
            arr.append(leftList.shift())
        else:
            arr.append(rightList.shift())
    return Array(arr, leftList, rightList)


def mergeSort(array):
    half = len(array) / 2

    if (len(array) < 2):
        return array

    left = array[:half]
    right = array[half:]

    return merge(mergeSort(left), mergeSort(right))


list = [3, 5, 2, 1, 4]

result = mergeSort(list)
print(result)
