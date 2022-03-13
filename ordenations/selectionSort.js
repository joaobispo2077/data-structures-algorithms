/*
  - Simple algorithm
  - In the first iteration we will search by minor element and put it in
  first position of list.
  - In each iteration we will put minor element in the left position.


  - Big O
    - Best case O(n^2) 
    - Worst case O(n^2)
*/


// O(n^2)

const list = [13, 2, 1, 3, 8, 5];

function selectionSort(list) {
  let minor;

  for (let index = 0; index < list.length - 1; index++) {
    minor = index;

    for (let j = index + 1; j < list.length; j++) {
      if (list[j] < list[minor]) {
        minor = j;
      }
    }

    if (index !== minor) {
      let temp = list[index];
      list[index] = list[minor];
      list[minor] = temp;
    }

  }

  return list;
}

console.time('selectionSort');
const result = selectionSort(list);
console.timeEnd('selectionSort');
console.log(result);