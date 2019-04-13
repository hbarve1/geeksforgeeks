/**
 *
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  insert(value) {
    this.length += 1;
    this.data[this.length] = value;
  }
}
