const foo = require("../index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(foo.sum(1, 2)).toBe(3);
});

test("isNullUndefinedEmptyStringArrayObject", () => {
  const testFunc = foo.isNullUndefinedEmptyStringArrayObject;
  expect(testFunc(null)).toBe(true);
  expect(testFunc(undefined)).toBe(true);
  expect(testFunc([])).toBe(true);
  expect(testFunc("")).toBe(true);
  expect(testFunc("  ")).toBe(true);
  expect(testFunc({})).toBe(true);
  expect(testFunc([1])).toBe(false);
  expect(testFunc({ a: 1 })).toBe(false);
});
