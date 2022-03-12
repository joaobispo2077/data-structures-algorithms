// O(n^2)

function showListPair(list) {
  for (element of list) {
    for (element2 of list) {
      console.log(element, element2);
    }
  }
}

showListPair([1, 2])