// mergeArrays([0,3,4,31], [4, 6, 30])
// output: [0, 3, 4, 4, 6, 30, 31]

function bruteForceMergeSorted(firstList, secondList) {
  let sorted = [];
  let itemFromFistList = firstList[0];
  let itemFromSecondList = secondList[0];

  let indexFirst = 0;
  let indexSecond = 0;

  while (itemFromFistList || itemFromSecondList) {
    if (!itemFromSecondList || itemFromFistList < itemFromSecondList) {
      sorted.push(itemFromFistList);
      itemFromFistList = firstList[indexFirst];
      indexFirst++
    } else {
      sorted.push(itemFromSecondList);
      itemFromSecondList = secondList[indexSecond];
      indexSecond++
    }
  }

  return sorted;
};
// O(n)
console.log(bruteForceMergeSorted([0, 3, 4, 31], [4, 6, 30]));
