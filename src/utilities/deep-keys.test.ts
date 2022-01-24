import deepKeys from "./deep-keys";

const testObject = {
  test: "test",
  test2: {
    test: "test",
  },
  test3: {
    test: "test",
    test2: {
      test: "test",
    },
  },
  testArray: [
    "test",
    {
      test: "test",
    },
  ],
};

describe("`deepKeys` function", () => {
  it("lists object keys", () => {
    expect(deepKeys(testObject, false)).toEqual([
      "test",
      "test2.test",
      "test3.test",
      "test3.test2.test",
      "testArray",
    ]);
  });

  it("lists object keys including intermediate ones", () => {
    expect(deepKeys(testObject, true)).toEqual([
      "test",
      "test2",
      "test2.test",
      "test3",
      "test3.test",
      "test3.test2",
      "test3.test2.test",
      "testArray",
    ]);
  });
});
