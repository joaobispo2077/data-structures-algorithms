"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

interface TNode {
  left?: TNode;
  right?: TNode;
  parent?: TNode;
  num: number;
}

const addNode = (num: number, node: TNode) => {
  if (num < node.num) {
    if (!node.left) {
      //console.log('creating left', num)
      node.left = {
        num,
        parent: node,
      };
    } else {
      //console.log('drilling left', num)
      addNode(num, node.left);
    }
  } else if (num > node.num) {
    if (!node.right) {
      //console.log('creating right', num)
      node.right = {
        num,
        parent: node,
      };
    } else {
      //console.log('drilling right', num)
      addNode(num, node.right);
    }
  }
};

function getHeight(node: TNode): number {
  if (!node.left && !node.right) {
    return 0;
  } else if (node.left && node.right) {
    return Math.max(getHeight(node.right) + 1, getHeight(node.left) + 1);
  } else if (!node.left) {
    return getHeight(node.right) + 1;
  } else {
    return getHeight(node.left) + 1;
  }
}

//[ '7', '3 5 2 1 4 6 7' ]
function main() {
  readLine();
  const iNumsStr = readLine().split(" ");
  //console.log(iNumsStr)
  const iNums = iNumsStr.map((num) => parseInt(num));
  //console.log(iNums)

  let start: TNode;
  iNums.forEach((num) => {
    if (!start) {
      start = {
        num,
      };
    } else {
      addNode(num, start);
    }
  });

  console.log(getHeight(start));
}
