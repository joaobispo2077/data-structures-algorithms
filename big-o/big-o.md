# Big O (asymptotic notation)
> Constant time beats linear IF data is sufficiently big.
>
> Gayle Laakmann McDowell

A method to analyse complexility and performance of an algorithm, this helps to determine if the algorithm is efficient compared with others, and to predict the behavior of the algorithm according to the received data.

## Why is Big O important?

"If I have to know about the performance, why would I want to know about the complexity instead just run algorithm writing execution initial and final time?".

Exists many issues when write initial and final time, because programming languages, hardware, operational systems, have a different performance running the same algorithm.

Big-o is the most pure way to measure the complexity of an algorithm, because you won't actually quantify the running time of the algorithm, but get data to understand how the final time might increase.

In large scale, the Big-O notation is very important, for a bad design solution you can lock the application on few users (10.000) with the same hardware resources, and the application will be blocked for a long time. But when you have a good design, you can have a good performance and using same resource to manage many users (100.000).

This relation, from 10.000 to 100.000 you can achieve when refact an algorithm in O(n^2) to O(n).



Big O is based on the following rules to determine the complexity of an algorithm:
- Different steps get added.
- Ignore constants (like time and duplicated behavior ).
- Different inputs in differents variables.

```js
// O (a + b)
// different inputs with different variables 

function intersectionSize(list1, list2) {
  let count = 0;

  for (element of list1) {
    if (list2.includes(element)) {
      count++;
    }
  }

  return count;
}
```
- Ignore non-dominant terms.
```js
// This example below is not O( 1 + n)
// It is O(N)
function showEachInListAndShowList(list) {
  for (element of list) {
    console.log(element);
  }

  console.log(list);
}
```
- Focus in the worst case scenario.

```js
// If has a if in code, you consider the worst case scenario.
// O(n)
function findInList(list, targetElement) {
  let foundElement;

  for (element of list) {
    if (element === targetElement) {
      foundElement = element;
    }
  }

  return foundElement;
}
```

In geral, you have the situations below:
- O(1) - Fixed cost.
- O(log n) - Divide and conquer, process half of the list in each iteration.
- O(n) - Loop statement with a fixed number of iterations.
- O(n log n) - Divide and conquer,break problem in small problems and solve them independently.
- O(n^2) - Loop statement with a fixed number of iterations and nested loops (2).
- O(n^3) - Loop statement with a fixed number of iterations and nested loops (3).
- O(n^4) - Loop statement with a fixed number of iterations and nested loops (4).
- O(n!) - Loop statement with a fixed number of iterations and nested loops.



Some anotations:

- **Constant Time**: O(1)
  - When you increase data size, the time of the algorithm will be the same.
- **Linear Time**: O(n)
  - When you increase data size, the time of the algorithm will increase linearly.
- **Quadratic Time**: O(n^2)
  - When you increase data size, the time of the algorithm will increase quadratically.
- **Cubic Time**: O(n^3)
  - When you increase data size, the time of the algorithm will increase cubicly.
- **Exponential Time**: O(2^n)
  - When you increase data size, the time of the algorithm will increase exponential.
- **Logarithmic Time**: O(log n)
  - When you increase data size, the time of the algorithm will increase logarithmicly.
- **Factorial Time**: O(n!)
  - When you increase data size, the time of the algorithm will increase factorialy.

