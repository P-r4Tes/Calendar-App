// tag.test.ts 파일
import { postTag, updateTagColor, updateTagTitle } from "@/api/tags";
import * as firebaseModule from "@/api/firebase";

jest.mock("@/api/firebase", () => ({
  ...jest.requireActual("@/api/firebase"),
  postFirebase: jest.fn(),
  updateFirebaseField: jest.fn(),
}));

describe("postTag function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("color가 비어 있으면 에러가 반환되어야 한다", () => {
    const tag = { color: "", title: "Test Tag" };
    expect(() => postTag(tag)).toThrow("Invalid color Data");
  });

  test("title이 비어 있으면 에러가 반환되어야 한다", () => {
    const tag = { color: "#FFFFFF", title: "" };
    expect(() => postTag(tag)).toThrow("Invalid title Data");
  });

  test("color와 title이 제공되면 postFirebase가 호출되어야 한다", async () => {
    const tag = { color: "#FFFFFF", title: "Test Tag" };
    postTag(tag);
    expect(firebaseModule.postFirebase).toHaveBeenCalledWith("tags", tag);
  });
});

describe("updateTagTitle function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("title이 비어 있으면 에러가 반환되어야 한다", () => {
    const id = "testId";
    const title = "";
    expect(() => updateTagTitle(id, title)).toThrow("Invalid title");
  });
  test("id가 비어 있으면 에러가 반환되어야 한다", () => {
    const id = "";
    const title = "Test Tag";
    expect(() => updateTagTitle(id, title)).toThrow("Invalid id");
  });

  test("올바른 값이 주어지면 updateFirebaseField가 호출되어야 한다", async () => {
    const id = "testId";
    const title = "Test Tag";
    updateTagTitle(id, title);
    expect(firebaseModule.updateFirebaseField).toHaveBeenCalledWith("tags", id, "title", title);
  });
});

describe("updateTagColor function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("color가 비어 있으면 에러가 반환되어야 한다", () => {
    const id = "testId";
    const color = "";
    expect(() => updateTagColor(id, color)).toThrow("Invalid color");
  });
  test("id가 비어 있으면 에러가 반환되어야 한다", () => {
    const id = "";
    const color = "#FFFFFF";
    expect(() => updateTagColor(id, color)).toThrow("Invalid id");
  });

  test("올바른 값이 주어지면 updateFirebaseField가 호출되어야 한다", async () => {
    const id = "testId";
    const color = "#FFFFFF";
    updateTagColor(id, color);
    expect(firebaseModule.updateFirebaseField).toHaveBeenCalledWith("tags", id, "color", color);
  });
});
