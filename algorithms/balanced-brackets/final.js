function isBalanced(text) {
  const stack = [];
  const leftBrackets = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ]);
  const rigthBrackets = new Map([
    ['}', '{'],
    [']', '['],
    [')', '('],
  ]);

  for (const char of text) {
    if (leftBrackets.has(char)) {
      stack.push(char);
    } else {
      if (stack.length > 0) {

        const last = stack.pop();
        if (rigthBrackets.get(last) !== char) {
          return "NO";
        }

      } else {
        return "NO";
      }
    };

    return stack.length ? "NO" : "YES";
  }


}

const text = "{{[[(())]]}}";

isBalanced(text);


console.log(isBalanced(text));
console.log(isBalanced("{{[[((})]]}}"));
