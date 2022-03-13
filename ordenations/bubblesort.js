/*
  - Simple algorithm
  - Elements with greater values are moved to the top (right)
  - The top is represented by the last positions of the array
  - Repeats until the array is sorted
  - Compare data in two and swap if necessary
  - If one position is greather than the other, swap them


  - Big O
    - Best case O(n) - when elements already sorted
    - Worst case O(n^2) - when elements are in reverse order
*/


// O(n^2)


function bubbleSort(list) {
  for (let j = 0; j < list.length - 1; j++) {

    for (let i = 0; i < list.length - 1; i++) {

      if (list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;

      }
    }
  }

  return list;
}

const list = [50, 0, 3, 5, 1, 10, 2, 4]

console.time('bubblesort');
const result = bubbleSort(list);
console.timeEnd('bubblesort');
console.log(result);


// decrease position lenght to analyse in order of after each iteration
// greather position is already in the last
function bubbleSortMorePerformatic(list) {
  for (let last = list.length - 1; last > 0; last--) {

    for (let i = 0; i < last; i++) {

      if (list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;

      }
    }
  }

  return list;
}

console.time('bubbleSortMorePerformatic');
const result2 = bubbleSortMorePerformatic(list);
console.timeEnd('bubbleSortMorePerformatic');
console.log(result2);

// if was not happen one swap, it means that list is already sorted
function bubbleSortBestPerf(list) {
  let swap;
  let lastPosition = list.length - 1;

  do {
    swap = false;

    for (let i = 0; i < lastPosition; i++) {
      if (list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        swap = true;
      }
    }

    lastPosition--;
  } while (swap);

  return list;
}

console.time('bubbleSortBestPerf');
const result3 = bubbleSortBestPerf(list);
console.timeEnd('bubbleSortBestPerf');
console.log(result3);
