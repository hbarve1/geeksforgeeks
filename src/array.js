/**
 *
 * @flow
 */

class MyArray {
  length: number;

  data: {
    [x: number]: number
  };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  insert(value: number): { [x: number]: number } {
    this.length += 1;
    this.data[this.length] = value;

    return this.data;
  }

  update(value: number, index: number): { [x: number]: number } {
    this.data[index] = value;

    return this.data;
  }
}

export default MyArray;
