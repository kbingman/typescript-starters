import { hello } from './index';

describe("library", () => {
  test("works", () => {
    expect(hello('world')).toBe('hello world');
  });
});
