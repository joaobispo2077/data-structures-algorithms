function merge(leftList, rigthList) {
  const result = [];

  while (leftList.length && rigthList.length) {
    if (leftList[0] < rigthList[0]) {
      result.push(leftList.shift());
    } else {
      result.push(rigthList.shift());
    }
  }

  return result.concat(leftList, rigthList);
}

function mergeSort(list) {
  if (list.length === 1) {
    return list;
  }

  const mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function formatFloat(number) {
  return parseFloat(number).toFixed(1);
}

function findRunningMedian(list) {
  if (list.length === 1) {
    result.push(formatFloat(list[0]));
  }

  const sortedList = mergeSort(list);

  const isPair = list.length % 2 === 0;

  if (isPair) {
    const leftIndex = Math.floor((list.length) / 2) - 1;
    const rigthIndex = leftIndex + 1;
    return formatFloat((sortedList[leftIndex] + sortedList[rigthIndex]) / 2);
  } else {
    const index = parseFloat(Math.floor(list.length / 2)).toFixed(0);
    return formatFloat(sortedList[index]);
  }
};

console.log(findRunningMedian([12]));
console.log(findRunningMedian([12, 4, 5, 3, 8, 7]));
console.log(findRunningMedian([3, 8, 7, 10, 1, 2, 9, 5, 4, 6]));
