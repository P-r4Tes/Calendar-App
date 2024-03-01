import * as firebaseModule from "@/api/firebase";
import {
  postUser,
  pushUserPersonalSchedule,
  pushUserGroup,
  popUserPersonalSchedule,
  popUserGroup,
  updateUserName,
  getUser,
  deleteUser,
} from "@/api/users";

jest.mock("@/api/firebase", () => ({
  ...jest.requireActual("@/api/firebase"),
  postFirebase: jest.fn(),
  getFirebase: jest.fn(),
  deleteFirebase: jest.fn(),
  pushFirebaseArray: jest.fn(),
  popFirebaseArray: jest.fn(),
  updateFirebaseField: jest.fn(),
}));

describe("User functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("name이 비어있으면 postUser는 에러를 반환해야 한다", () => {
    const body = { name: "", groups: ["g1"], personalSchedules: ["s1"] };
    expect(() => postUser(body)).toThrow("Invalid name");
  });

  test("id가 비어있지 않으면 getUser는 getFirebase를 호출해야 한다", () => {
    const id = "TEST_ID";
    getUser(id);
    expect(firebaseModule.getFirebase).toHaveBeenCalledWith("users", id);
  });

  test("id가 비어있지 않으면 deleteUser는 deleteFirebase를 호출해야 한다", () => {
    const id = "TEST_ID";
    deleteUser(id);
    expect(firebaseModule.deleteFirebase).toHaveBeenCalledWith("users", id);
  });

  test("name이 비어있지 않으면 postUser는 postFirebase를 호출해야 한다", () => {
    const body = { name: "CSKIM", groups: ["g1"], personalSchedules: ["s1"] };
    postUser(body);
    expect(firebaseModule.postFirebase).toHaveBeenCalledWith("users", body);
  });

  test("전달인자가 유효하지 않다면 pushUserPersonalSchedule는 에러를 반환해야 한다", () => {
    expect(() => pushUserPersonalSchedule("userId", "")).toThrow("Invalid string arguments");
  });

  test("전달인자가 유효하지 않다면 pushUserGroup는 에러를 반환해야 한다", () => {
    expect(() => pushUserGroup("userId", "")).toThrow("Invalid string arguments");
  });

  test("전달인자가 유효하지 않다면 popUserPersonalSchedule는 에러를 반환해야 한다", () => {
    expect(() => popUserPersonalSchedule("userId", "")).toThrow("Invalid string arguments");
  });

  test("전달인자가 유효하지 않다면 popUserGroup는 에러를 반환해야 한다", () => {
    expect(() => popUserGroup("userId", "")).toThrow("Invalid string arguments");
  });

  test("전달인자가 유효하지 않다면 updateUserName는 에러를 반환해야 한다", () => {
    expect(() => updateUserName("userId", "")).toThrow("Invalid string arguments");
  });
});
