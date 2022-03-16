const { LinkedList } = require("./linkedList");

const linkedList = new LinkedList();

console.info(linkedList);
linkedList.append(12);
linkedList.append(1221);
console.info(linkedList);
console.info(linkedList.length);


console.info(linkedList.get(1));
console.info(linkedList.set(1, 123));
console.info(linkedList);
console.info(linkedList.length);
console.info(linkedList.search(123));
linkedList.insert(1, 21);
linkedList.insert(0, 3);
console.info(linkedList);
linkedList.remove(123)
console.info(linkedList);
console.info(JSON.stringify(linkedList, null, 2));