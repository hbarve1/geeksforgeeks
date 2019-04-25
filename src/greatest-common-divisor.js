/**
 *
 *
 * @export
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function method1(a: number, b: number): number {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }

  if (a === b) {
    return a;
  }

  if (a > b) {
    return method1(a - b, b);
  }

  return method1(a, b - a);
}

/**
 * Euclidean algorithm
 *
 * @export
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function method2(a: number, b: number): number {
  if (b === 0) {
    return a;
  }

  return method2(b, a % b);
}
