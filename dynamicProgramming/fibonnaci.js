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
  let memo = [null, null, 1, 1];
  for (let i = 3; i <= number; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[number];
}

console.time('fibonnaci');
console.log(fibonnaci(5));
console.timeEnd('fibonnaci');

console.time('fibonnaciWithMemoization');
console.log(fibonnaciWithMemoization(5, []));
console.timeEnd('fibonnaciWithMemoization');

console.time('fibonnaciBottomUp');
console.log(fibonnaciBottomUp(5));
console.timeEnd('fibonnaciBottomUp');