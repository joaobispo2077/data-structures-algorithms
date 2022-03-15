// Big  O: O(log n)

const orderedList = [1, 4, 6, 8, 24, 53, 71, 96, 100];

function binarySearch(list, item) {
  const middleIndex = Math.floor(list.length / 2);

  const leftList = list.slice(0, middleIndex);
  const rightList = list.slice(middleIndex);

  if (list[middleIndex] === item) {
    return middleIndex;
  }

  if (list[middleIndex] > item) {
    return binarySearch(leftList, item);
  } else {
    return middleIndex + binarySearch(rightList, item);
  }
}

console.time('binarySearch');
console.log(binarySearch(orderedList, 100));
console.timeEnd('binarySearch');