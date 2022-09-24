class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.unshift(index);
    return item;
  }

  unshift(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    };

    delete this.data[this.length - 1];
    this.length--;
  }
}

const list = new MyArray();
list.push('hi');
list.push('you');
list.push('how');
list.push('are');
list.push('you');
console.log(list);
console.log(list);
console.log(list.get(0));
