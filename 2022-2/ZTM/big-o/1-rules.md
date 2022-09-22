# Big o - Asymptotic Analysis

it can tell us how well a problem can be solved.

# O(N) - Linear Time

```js
const fishList = ['nemo'];

function findFish(list, fish) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === fish) {
      console.log('Found fish!');
    }
  }
}

findFish(fishList, 'nemo');
```
# O(1) - Constant time

## Rules

### Worst Case

Consider the worst case scenario for a function, for example, if we have a function that loops through an array, we should consider the case where the item we are looking for is at the end of the array.

### Remove Constants

In big o, you're interested in how large the input is to estimate how long it will take to run the function. So, you can remove constants from the equation.

### Different terms for inputs

O (a + b)

```js
function compressBoxes(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });

  boxes.forEach(function(boxes2) {
    console.log(boxes);
  });
};
```
if then are nested, should you use O (a * b)

### Drop non dominant terms

If u have something like O (n + nˆ2), in big o, you care about the most significant term, so you can drop the non dominant terms like n, so you will have O (nˆ2).
