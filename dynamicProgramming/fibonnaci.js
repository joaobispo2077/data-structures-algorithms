// O(2^n)
function fibonnaci(number) {
  if (number < 2) {
    return number;
  }

  return fibonnaci(number - 1) + fibonnaci(number - 2);
}

function fibonnaciWithMemoization(number, memo) {
  if (memo[number] !== null) {
    return memo[number];
  }

  if (number < 2) {
    return number;
  }

  let result = fibonnaciWithMemoization(number - 1) + fibonnaciWithMemoization(number - 2);
  memo[number] = result;
  return result;
}
// O(N)

function fibonnaciBottomUp(number) {
  if (number < 2) {
    return 1;
  }

  let bottomUp = new Array(number + 1);
  bottomUp[1] = 1;
  bottomUp[2] = 1;

  for (let i = 3; i <= number + 1; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }
  return bottomUp[number];
}

console.time('fibonnaci');
console.log(fibonnaci(5));
console.timeEnd('fibonnaci');

console.time('fibonnaciWithMemoization');
console.log(fibonnaciWithMemoization(5, [null, null, null, null]));
console.timeEnd('fibonnaciWithMemoization');

console.time('fibonnaciBottomUp');
console.log(fibonnaciBottomUp(35));
console.timeEnd('fibonnaciBottomUp');
