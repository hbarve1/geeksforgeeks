/**
 *
 *
 * @param {Array<number>} array
 * @param {number} distance
 */
export function method1(array: Array<number>, distance: number): Array<number> {
  const temp = array.splice(0, distance);

  return [...array, ...temp];
}

export function method2(array: Array<number>, distance: number): Array<number> {
  const newArray = [...array];

  for (let i = 0; i < distance; i += 1) {
    const temp = newArray[0];

    for (let j = 0; j < newArray.length; j += 1) {
      newArray[j] = newArray[j + 1];
    }
    newArray[newArray.length - 1] = temp;
  }

  return newArray;
}
