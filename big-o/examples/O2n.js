// O(2^n)

function fibonnaci(number) {
  if (number < 2) {
    return number;
  }

  return fibonnaci(number - 1) + fibonnaci(number - 2);
}

console.log(fibonnaci(5));