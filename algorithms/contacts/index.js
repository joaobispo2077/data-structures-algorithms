'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'contacts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY queries as parameter.
 */
class Node {
  constructor() {
    this.children = [];
    this.size = 0;
  }

  _getCharFromIndex(index) {
    return String.fromCharCode(index + 97);
  }

  _getIndexFromChar(char) {
    return String(char).charCodeAt() - 97;
  }

  getNode(char) {
    const indexFromChar = this._getIndexFromChar(char);
    return this.children[indexFromChar];
  }

  setNode(char, node) {
    const indexFromChar = this._getIndexFromChar(char);
    this.children[indexFromChar] = node;
  }

  add(word, index = 0) {
    this.size++;

    if (index === word.length) {
      return;
    }

    const currentChar = String(word).charAt(index);
    let child = this.getNode(currentChar);

    if (!child) {
      child = new Node();
      this.setNode(currentChar, child);
    }

    child.add(word, index + 1);
  }

  findCount(word, index = 0) {
    if (word.length === index) {
      return this.size;
    }

    const char = String(word).charAt(index);
    const child = this.getNode(char);

    if (!child) {
      return 0;
    }

    return child.findCount(word, index + 1);
  }

}

function contacts(queries) {

  const storeTrie = new Node();
  const results = [];

  for (const [operation, query] of queries) {
    if (operation === 'add') {
      storeTrie.add(query);
    } else {
      results.push(storeTrie.findCount(query));
    }
  }

  return results;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const queriesRows = parseInt(readLine().trim(), 10);

  let queries = Array(queriesRows);

  for (let i = 0; i < queriesRows; i++) {
    queries[i] = readLine().replace(/\s+$/g, '').split(' ');
  }

  const result = contacts(queries);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
