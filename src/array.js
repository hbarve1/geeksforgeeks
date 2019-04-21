/**
 * @format
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  insert(value: Number) {
    this.length += 1;
    this.data[this.length] = value;
  }
}

export default MyArray;
