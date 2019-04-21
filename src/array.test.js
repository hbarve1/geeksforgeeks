import MyArray from "./array";

describe("Class Array", () => {
  test("Initial Length", () => {
    //
    const array = new MyArray();

    expect(array.length).toBe(0);
  });
});
