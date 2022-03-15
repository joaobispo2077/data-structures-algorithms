// Big O: O(n)
const list = [12, 34, 56, 78, 90];

function linearSearch(list, item) {
  for (let index = 0; index < list.length; index++) {
    if (list[index] === item) {
      return index;
    }
  }

  return null;
}

console.time('linearSearch');
console.log(linearSearch(list, 90));
console.timeEnd('linearSearch');