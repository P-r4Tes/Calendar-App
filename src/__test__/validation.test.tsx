import { isEmpty, isStringArgumentsValid } from "@/lib/functions/stringValidation";

describe("isEmpty function", () => {
  test("빈 문자열이라면 true가 반환되어야 한다", () => {
    expect(isEmpty("")).toBe(true);
  });

  test("공백 문자열이라면 true가 반환되어야 한다", () => {
    expect(isEmpty("   ")).toBe(true);
  });

  test("비어있지 않은 문자열이라면 false가 반환되어야 한다", () => {
    expect(isEmpty("hello")).toBe(false);
  });

  test("좌우 공백이 있지만 비어있지 않은 문자열이라면 false가 반환되어야 한다", () => {
    expect(isEmpty(" hello ")).toBe(false);
  });
});

describe("isStringArgumentValid function", () => {
  test("모든 전달인자가 유효한 문자열이라면 false 가 반환되어야 한다", () => {
    expect(isStringArgumentsValid("foo", "boo")).toBe(true);
  });

  test("하나라도 비어있거나 공백인 문자열이라면 포함되었다면 false가 반환되어야 한다", () => {
    expect(isStringArgumentsValid("foo", "")).toBe(false);
    expect(isStringArgumentsValid("", "boo")).toBe(false);
    expect(isStringArgumentsValid("foo", " ", "boo")).toBe(false); // 공백 문자열도 비어있는 것으로 간주할 수 있음
  });

  test("전달인자가 없다면 false가 반환되어야 한다", () => {
    expect(isStringArgumentsValid()).toBe(false);
  });
});
