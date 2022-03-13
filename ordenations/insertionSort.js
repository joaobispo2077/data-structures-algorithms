/*
  - Simple algorithm
  - The xternal loop iteration, initiate in second position.
    - for receive each value taht will be ordered by insertion in the array.
    - each received value will be calld by the "actual".
  - The internal lopp iteration will be compare the "actual" with previous ordered values
    - The comparation will be from the last to the first values.
    - If the actual is minor than the last, then it will be swap  the last to the first position, for create a space to actual value entered.
  - Outside internal loop, the "actual" will fill the left position.
  - Big O
    - Best case O(n^2)
    - Worst case O(n^2)
*/


// O(n^2)

const list = [13, 2, 1, 3, 8, 5];


function insertionSort(list) {
  let actual;

  for (let index = 1; index < list.length; index++) {
    let previousPosition = index - 1;
    actual = list[index];

    while (previousPosition >= 0 && actual < list[previousPosition]) {
      list[previousPosition + 1] = list[previousPosition];
      previousPosition--;
    }

    list[previousPosition + 1] = actual;

    console.log(list);
  }

  return list;
}


console.time('insertionSort');
const result = insertionSort(list);
console.timeEnd('insertionSort');
console.log(result);