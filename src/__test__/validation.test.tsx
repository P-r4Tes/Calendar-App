import { isEmpty } from "@/lib/functions/stringValidation";

describe("isEmpty function", () => {
  test("빈 문자열 테스트", () => {
    expect(isEmpty("")).toBe(true);
  });

  test("공백 문자열 테스트", () => {
    expect(isEmpty("   ")).toBe(true);
  });

  test("비어있지 않은 문자열 테스트", () => {
    expect(isEmpty("hello")).toBe(false);
  });

  test("좌우 공백 비어있지 않은 문자열 테스트", () => {
    expect(isEmpty(" hello ")).toBe(false);
  });
});
