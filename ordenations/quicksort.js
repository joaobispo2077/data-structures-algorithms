function partition(list, firstPosition, secondPosition) {
  let temp = list[firstPosition];
  list[firstPosition] = list[secondPosition];
  list[secondPosition] = temp;
  return list;
}

function quicksort(list, start, end) {
  if (start < end) {
    let pivot = partition(list, start, end);
    quicksort(list, start, pivot - 1);
    quicksort(list, pivot + 1, end);
  }

  return list;
}

const list = [3, 5, 2, 1, 4];

console.log(quicksort(list, 0, list.length - 1));