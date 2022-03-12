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

findInList([1, 2, 3, 4, 5], 3);

// =========================

function showList(list) {
  for (element of list) {
    console.log(element);
  }
}

showList([1, 2])


// =========================
