const strings = ['a', 'b', 'c', 'd'];

strings.push('e'); // O(1)

strings.pop(); // O(1)

strings.unshift('x') // O(n)

strings.splice(2, 0, 'middle') // O(n)
