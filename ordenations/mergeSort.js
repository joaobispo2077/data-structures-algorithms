/*
  - Ordenation based in recursion
  - Use a decision three to make ordenation
  - Divide and conquer
  - main algorithm that can be used to do recursion and separe list
  - second algorithm intercalate and separate each elements from list


  - Big O
    - Best case  O(n log n)
    - Worst case  O(n log n)
*/


// O(n log n)

const list = [50, 0, 3, 5, 1, 10, 2, 4]

console.time('mergeSort');
const result = mergeSort(list);
console.timeEnd('mergeSort');
console.log(result);


function merge(leftList, rightList) {
  let arr = []
  while (leftList.length && rightList.length) {
    if (leftList[0] < rightList[0]) {
      arr.push(leftList.shift())
    } else {
      arr.push(rightList.shift())
    }
  }

  return [...arr, ...leftList, ...right]
}

function mergeSort(array) {
  const half = Math.floor(array.lenght / 2);

  if (array.length < 2) {
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left), mergeSort(array))
}

console.time('mergeSort');
const result2 = mergeSort(list);
console.timeEnd('mergeSort');
console.log(result2);


// function intercalate(list, start, middle, end) {
//   let size = end - start + 1;
//   let leftPosition = start;
//   let rightPosition = middle + 1;
//   let leftFinalPosition = false;
//   let rightFinalPosition = false;
//   let orderedList = [];


//   for (let index = 0; index < size; index++) {
//     if (!leftFinalPosition && !rightFinalPosition) {
//       if (list[leftPosition] < list[rightPosition]) {
//         orderedList[index] = list[leftPosition++];
//       } else {
//         orderedList[index] = list[rightPosition++];
//       }

//       if (leftPosition > middle) {
//         leftFinalPosition = true;
//       }

//       if (rightPosition > end) {
//         rightFinalPosition = true;
//       }

//     } else {
//       if (!leftFinalPosition) {
//         orderedList[index] = list[leftPosition++];
//       } else {
//         orderedList[index] = list[rightPosition++];
//       }
//     }

//   }
// }

// function mergeSort(list, start, end) {
//   if (start < end) {
//     let middle = Math.floor((start + end) / 2);
//     mergeSort(list, start, middle);
//     mergeSort(list, middle + 1, end);
//     return intercalate(list, start, middle, end);
//   }


//   return list;
// }