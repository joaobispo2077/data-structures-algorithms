const list = [4, 7, 2, 6, 5, 1, 8, 3];


function merge(leftList, rightList) {
  let list = [];

  while (leftList.length > 0 && rightList.length > 0) {
    if (leftList[0] < rightList[0]) {
      list.push(leftList.shift())
    } else {
      list.push(rightList.shift())
    }
  }

  return list.concat(leftList).concat(rightList);
}

function mergeSort(list) {
  if (list.length < 2) {
    return list;
  }
  const middleIndex = Math.floor(list.length / 2);


  const leftList = list.slice(0, middleIndex);
  const rightList = list.slice(middleIndex, list.length);


  return merge(mergeSort(leftList), mergeSort(rightList));
};

console.info("before:", list);
console.info("after:", mergeSort(list));
