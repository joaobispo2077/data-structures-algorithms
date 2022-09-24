// reverse an array
// the string "Hi my name is John"
// should be "nhoJ si eman ym iH"

// O(n)

function bruteForceReverse(text) {
  let characterList = text.split('');
  const middleIndex = Math.floor(characterList.length / 2);

  for (let index = 0; index < middleIndex; index++) {
    const itemFromEnd = characterList[characterList.length - 1 - index];
    const itemFromStart = characterList[index];

    characterList[index] = itemFromEnd;
    characterList[characterList.length - 1 - index] = itemFromStart;
  };

  return characterList.join('');
}

const result = bruteForceReverse("Hi my name is John");
console.log(result);



function recursiveReverse(text, start, middle, end) {
  if (start === middle) {
    return text.join("");
  };

  if (!Number.isInteger(start)) {
    const characterList = text.split("")
    const middleIndex = Math.floor(characterList.length / 2);

    return recursiveReverse(characterList, 0, middleIndex, characterList - 1);
  };

  return recursiveReverse(text, start + 1, middle, end);
}
// recursive reverse
const recursiveResult = bruteForceReverse("Hi my name is John");
console.log(recursiveResult);
